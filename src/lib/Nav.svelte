<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import NavIndicator from './NavIndicator.svelte';
  let ishidden = false;
  let toggle_visibility = (v) => {
    document.body.classList.toggle('blurred');
    ishidden = v;
  };
  let tabs = [
    { ishovered: false, title: 'About', href: '/' },
    { ishovered: false, title: 'Skills', href: '/skills' },
    { ishovered: false, title: 'Projects', href: '/projects' },
    { ishovered: false, title: 'Contact', href: '/contact' }
  ];
</script>

<div role="button" on:click={() => toggle_visibility(!ishidden)}>
  <div />
  <div />
  <div />
</div>
{#if ishidden}
  <div id="asidewrapper" on:click|once={() => toggle_visibility(false)}>
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
            on:click|once={() => {
              toggle_visibility(false);
              tab.ishovered = false;
            }}
          >
            {#if $page.url.pathname === tab.href || tab.ishovered}<NavIndicator />{/if}
            <a sveltekit:prefetch href={tab.href}>{tab.title}</a>
          </div>
        {/each}
        <img src="assets/svgs/eng.svg" alt="eng" height="23" width="44" />
        <img src="assets/svgs/pl.svg" alt="pl" height="23" width="44" />
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
  [role='button'] div {
    width: 40px;
    height: 3px;
    background: var(--text-color);
  }
  [role='button'] div:nth-child(2) {
    width: 35px;
  }
  [role='button'] div:nth-child(3) {
    width: 30px;
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
