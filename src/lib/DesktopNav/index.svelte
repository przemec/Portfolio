<script lang="ts">
  import NavIndicator from './components/NavIndicator.svelte';

  export let active_section;
  let tabs = [
    { ishovered: false, title: 'about', href: '#about' },
    { ishovered: false, title: 'skills', href: '#skills' },
    { ishovered: false, title: 'projects', href: '#projects' },
    { ishovered: false, title: 'contact', href: '#contact' }
  ];
</script>

<nav>
  {#each tabs as tab}
    <div
      class="tab"
      class:active={active_section === tab.title}
      on:mouseenter={() => (tab.ishovered = true)}
      on:mouseleave={() => (tab.ishovered = false)}
      on:click={() => (tab.ishovered = false)}
    >
      {#if active_section === tab.title || tab.ishovered}<NavIndicator />{/if}
      <a
        href={tab.href}
        on:click={(e) => {
          e.preventDefault();
          document.querySelector(tab.href).scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', tab.href);
        }}
      >
        {tab.title}
      </a>
    </div>
  {/each}
</nav>

<style lang="scss">
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

    &.active {
      transform: translateY(6px);
    }
    a {
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
    a:hover {
      color: var(--text-color-selected);
    }
  }
</style>
