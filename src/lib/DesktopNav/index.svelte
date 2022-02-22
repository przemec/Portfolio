<script lang="ts">
  import { scroll } from '$store';
  import NavIndicator from './components/NavIndicator.svelte';

  export let active_section;

  let tabs = [
    { ishovered: false, title: 'about' },
    { ishovered: false, title: 'skills' },
    { ishovered: false, title: 'projects' },
    { ishovered: false, title: 'contact' }
  ];
  $: if (tabs.filter((e) => e.ishovered === true).length !== 0) {
    document.getElementsByTagName('header')[0].classList.toggle('ishidden', false);
  }
</script>

<nav>
  {#each tabs as tab}
    <div
      class="tab"
      class:active={active_section === tab.title}
      on:mouseenter={() => (tab.ishovered = true)}
      on:mouseleave={() => (tab.ishovered = false)}
      on:focusin={() => (tab.ishovered = true)}
      on:focusout={() => (tab.ishovered = false)}
      on:click={() => (tab.ishovered = false)}
    >
      {#if active_section === tab.title || tab.ishovered}<NavIndicator />{/if}
      <a
        href={`/#${tab.title}`}
        on:click={(e) => {
          e.preventDefault();
          $scroll.scrollTo(document.querySelector(`#${tab.title}`));
          window.history.replaceState(null, '', `#${tab.title}`);
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
    user-select: none;
  }
  .tab {
    margin: 0 1rem;
    height: 100%;
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    &.active {
      transform: translateY(0.6rem);
    }
    a {
      display: flex;
      height: 5.4rem;
      text-align: center;
      align-items: center;
      color: var(--text-color);
      font-weight: 700;
      font-size: 2rem;
      line-height: 5.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      text-decoration: none;
      transition: color 0.2s linear;
    }
    a:hover {
      color: var(--text-color-selected);
    }
    a:focus-visible {
      color: var(--text-color-selected);
      font-weight: bold;
    }
  }
</style>
