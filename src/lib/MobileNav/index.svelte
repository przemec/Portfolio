<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import NavIndicator from './NavIndicator.svelte';
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  let ishidden = true;
  let set_hidden = (v) => {
    document.body.classList.toggle('blurred');
    ishidden = v;
  };
  let tabs = [
    { ishovered: false, title: 'About', href: '/' },
    { ishovered: false, title: 'Skills', href: '/skills' },
    { ishovered: false, title: 'Projects', href: '/projects' },
    { ishovered: false, title: 'Contact', href: '/contact' }
  ];

  function to_exit(node, { duration = 300, delay = 0, translate_dir, rotate_dir }) {
    const initial_width = node.offsetWidth;
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${(1 - eased) * 40 + initial_width}px;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 14}px) rotate(${
          rotate_dir === 'right' ? '-' : ''
        }${(1 - eased) * 45}deg);
        `;
      }
    };
  }
  function to_burger(node, { duration = 300, delay = 0, translate_dir, rotate_dir, width }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${eased * 10 + width}px;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 14}px) rotate(${
          rotate_dir === 'right' ? '-' : ''
        }${eased * 45}deg);
        `;
      }
    };
  }
  function to_nav(node, { duration = 800, delay = 0 }) {
    const initial_width = node.offsetWidth;
    const { x: initial_x, y: initial_y } = node.getBoundingClientRect();
    const { innerHeight: window_height, innerWidth: window_width } = window;
    // const translateX = Math.round(window_width - initial_x - initial_width - 20);
    const translateY = Math.round(window_height / 2) - initial_y;
    console.log(window_height, initial_y, translateY);
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: calc(${(1 - eased) * Math.round(window_width * 0.8 - 75) + initial_width}px);
          transform: translateY(${(1 - eased) * translateY}px) ;
        `;
      }
    };
  }
</script>

<div role="button" on:click={() => set_hidden(!ishidden)}>
  {#if ishidden}
    <span class="hamburger" out:to_exit={{ translate_dir: 'down', rotate_dir: 'right' }} />
    <span class="hamburger" in:fade={{ delay: 200 }} out:to_nav />
    <span class="hamburger" out:to_exit={{ translate_dir: 'up', rotate_dir: 'left' }} />
  {:else}
    <span class="exit" out:to_burger={{ translate_dir: 'up', rotate_dir: 'right', width: 40 }} />
    <span class="exit" />
    <span class="exit" out:to_burger={{ translate_dir: 'down', rotate_dir: 'left', width: 30 }} />
  {/if}
</div>
{#if !ishidden}
  <div id="asidewrapper" on:click={() => set_hidden(true)}>
    <aside
      in:fly={{ x: 300, duration: 300 }}
      out:fly={{ x: 300, duration: 300, delay: 100 }}
      on:click={(e) => e.stopPropagation()}
    >
      <nav>
        {#each tabs as tab}
          <div
            class="tab"
            class:active={$page.url.pathname === tab.href}
            on:mouseenter={() => (tab.ishovered = true)}
            on:mouseleave={() => (tab.ishovered = false)}
          >
            {#if $page.url.pathname === tab.href || tab.ishovered}<NavIndicator />{/if}
            <a
              sveltekit:prefetch
              href={tab.href}
              on:click={() => {
                set_hidden(true);
                tab.ishovered = false;
              }}>{tab.title}</a
            >
          </div>
        {/each}
      </nav>
    </aside>
  </div>
{/if}

<style>
  [role='button'] {
    z-index: 4;
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    overflow: visible;
  }
  [role='button'] span {
    z-index: 4;
    position: absolute;
    right: 0px;
    height: 3px;
    max-width: 40px;
    background: var(--text-color);
    will-change: transform, opacity, width;
  }
  [role='button'] .hamburger:nth-child(1) {
    top: 5px;
    width: 40px;
  }
  [role='button'] .hamburger:nth-child(2) {
    top: 19px;
    width: 35px;
    max-width: 80vw;
  }
  [role='button'] .hamburger:nth-child(3) {
    top: 33px;
    width: 30px;
  }
  [role='button'] .exit:nth-child(1) {
    top: 19px;
    width: 40px;
    transform: rotate(-45deg);
  }
  [role='button'] .exit:nth-child(2) {
    background: transparent;
  }
  [role='button'] .exit:nth-child(3) {
    top: 19px;
    width: 40px;
    transform: rotate(45deg);
  }
  #asidewrapper {
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  aside {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    width: 80vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-light);
    box-shadow: -5px 0px 20px -10px rgba(0, 0, 0, 0.7);
  }
  nav {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: top;
  }
  .tab {
    width: 100%;
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
  }

  .tab a {
    height: 3em;
    width: 100%;
    text-align: center;
    align-items: center;
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.2em;
    line-height: 3em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear, font-size 0.2s linear;
  }
  .tab a:hover {
    color: var(--text-color-selected);
  }
  .tab.active a {
    font-size: 1.6em;
  }
</style>
