<script lang="ts">
  import { page } from '$app/stores';
  import NavIndicator from './NavIndicator.svelte';
  let tabs = [
    { ishovered: false, title: 'Home', href: '/' },
    { ishovered: false, title: 'Projects', href: '/projects' },
    { ishovered: false, title: 'Skills', href: '/skills' },
    { ishovered: false, title: 'Contact', href: '/contact' }
  ];
</script>

<nav>
  <div id="container">
    {#each tabs as tab}
      <div
        class="tab"
        class:active={$page.url.pathname === tab.href}
        on:mouseenter={() => (tab.ishovered = true)}
        on:mouseleave={() => (tab.ishovered = false)}
      >
        {#if $page.url.pathname === tab.href || tab.ishovered}<NavIndicator />{/if}
        <a sveltekit:prefetch href={tab.href}>{tab.title}</a>
      </div>
    {/each}
  </div>
</nav>

<style>
  nav {
    z-index: 3;
    width: 100vw;
    height: 4em;
    padding: 0 10px;
    margin: 0 auto;
    max-width: 400px;
  }

  #container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: top;
  }

  .tab {
    height: 3em;
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    transition: transform 0.2s ease-in-out;
  }
  .tab.active {
    transform: translateY(10px);
  }

  .tab a {
    display: flex;
    height: 100%;
    text-align: center;
    align-items: center;
    color: var(--text-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color, font-size 0.2s linear;
  }
  @media (min-width: 480px) {
    .tab.active a {
      font-size: 1rem;
    }
  }
</style>
