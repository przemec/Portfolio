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

  function to_x(node, { duration = 300, delay = 0, translate_dirction, rotate_dirction }) {
    const initial_width = node.offsetWidth;
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${(1 - eased) * 40 + initial_width}px;
          --translateY:  ${translate_dirction === 'up' ? '-' : ''}${(1 - eased) * 14}px;
          --rotate:  ${rotate_dirction === 'right' ? '-' : ''}${(1 - eased) * 45}deg;
        `;
      }
    };
  }
</script>

<div role="button" on:click={() => set_hidden(!ishidden)}>
  {#if ishidden}
    <div class="l" transition:to_x={{ translate_dirction: 'down', rotate_dirction: 'right' }} />
    <div class="l" in:fade={{ duration: 100, delay: 200 }} out:fade={{ duration: 100 }} />
    <div class="l" transition:to_x={{ translate_dirction: 'up', rotate_dirction: 'left' }} />
  {:else}
    <div class="x" />
    <div class="x" />
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
            on:click={() => {
              set_hidden(true);
              tab.ishovered = false;
            }}
          >
            {#if $page.url.pathname === tab.href || tab.ishovered}<NavIndicator />{/if}
            <a sveltekit:prefetch href={tab.href}>{tab.title}</a>
          </div>
        {/each}
      </nav>
    </aside>
  </div>
{/if}

<style>
  [role='button'] {
    z-index: 4;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
  [role='button'] div {
    z-index: 4;
    position: absolute;
    right: 0px;
    height: 3px;
    max-width: 40px;
    background: var(--text-color);
    --rotate: 0deg;
    --translateY: 0;
    transform: translateY(var(--translateY)) rotate(var(--rotate));
  }
  [role='button'] .l:nth-child(1) {
    top: 5px;
    width: 40px;
  }
  [role='button'] .l:nth-child(2) {
    top: 19px;
    width: 35px;
  }
  [role='button'] .l:nth-child(3) {
    top: 33px;
    width: 30px;
  }
  [role='button'] .x:nth-child(1) {
    top: 19px;
    width: 40px;
    --rotate: 45deg;
  }
  [role='button'] .x:nth-child(2) {
    top: 19px;
    width: 40px;
    --rotate: -45deg;
  }
  #asidewrapper {
    z-index: 2;
    position: absolute;
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
    display: flex;
    height: 3em;
    text-align: center;
    align-items: center;
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.2em;
    line-height: 3em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color, font-size 0.2s linear;
  }
  .tab.active a {
    font-size: 1.6em;
  }
</style>
