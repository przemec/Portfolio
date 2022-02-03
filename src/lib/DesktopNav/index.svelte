<script lang="ts">
  import { page } from '$app/stores';
  import NavIndicator from './components/NavIndicator.svelte';
  let tabs = [
    { ishovered: false, title: 'About', href: '/' },
    { ishovered: false, title: 'Skills', href: '/skills' },
    { ishovered: false, title: 'Projects', href: '/projects' },
    { ishovered: false, title: 'Contact', href: '/contact' }
  ];
</script>

<nav>
  {#each tabs as tab}
    <div
      class="tab"
      class:active={$page.url.pathname === tab.href}
      on:mouseenter={() => (tab.ishovered = true)}
      on:mouseleave={() => (tab.ishovered = false)}
      on:click={() => (tab.ishovered = false)}
    >
      {#if $page.url.pathname === tab.href || tab.ishovered}<NavIndicator />{/if}
      <a sveltekit:prefetch href={tab.href}>{tab.title}</a>
    </div>
  {/each}
</nav>

<style>
  nav {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
  }
  .tab {
    margin: 0 10px;
    height: 100%;
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
  }
  .tab.active {
    transform: translateY(6px);
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
    transition: color 0.2s linear;
  }
  .tab a:hover {
    color: var(--text-color-selected);
  }
</style>
