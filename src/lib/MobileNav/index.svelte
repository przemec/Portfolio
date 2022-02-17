<script lang="ts">
  import { page } from '$app/stores';
  import { fly, fade } from 'svelte/transition';
  import { scroll } from '$store';
  import BurgerButton from './components/BurgerButton.svelte';
  import NavIndicator from './components/NavIndicator.svelte';
  import LinksPanel from '../LinksPanelHorizontal.svelte';

  export let active_section;

  let tabs = ['about', 'skills', 'projects', 'contact'];
  let ishidden = true;
  let set_hidden = (v) => {
    document.body.classList.toggle('blurred');
    ishidden = v;
  };
</script>

<BurgerButton {set_hidden} {ishidden} />
{#if !ishidden}
  <div id="asidewrapper" on:click={() => set_hidden(true)}>
    <div id="backdrop" transition:fade={{ duration: 300 }} />
    <aside
      in:fly={{ x: 300, duration: 300 }}
      out:fly={{ x: 300, duration: 300, delay: 100 }}
      on:click={(e) => e.stopPropagation()}
    >
      <nav>
        {#each tabs as tab}
          <div class="tab" class:active={active_section === tab}>
            {#if active_section === tab}<NavIndicator />{/if}
            <a
              href={`/#${tab}`}
              on:click={(e) => {
                set_hidden(true);
                $page.url.pathname === '/' && e.preventDefault();
                $scroll.scrollTo(document.querySelector(`#${tab}`));
                window.history.replaceState(null, '', `#${tab}`);
              }}
            >
              {tab}
            </a>
          </div>
        {/each}
      </nav>
      <footer>
        <LinksPanel />
      </footer>
    </aside>
  </div>
{/if}

<style lang="scss">
  #asidewrapper {
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  #backdrop {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
  }
  aside {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    width: 80vw;
    max-width: 40rem;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-lightest);
    box-shadow: -5px 0px 20px -10px rgba(0, 0, 0, 0.7);
    user-select: none;
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

    a {
      height: 5.4rem;
      width: 100%;
      text-align: center;
      color: var(--text-color);
      font-size: 2.2rem;
      line-height: 5.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      text-decoration: none;
      transition: color 0.2s, font-size 0.2s;
    }
    a:hover,
    a:focus-visible {
      font-weight: bold;
      color: var(--text-color-selected);
    }
    &.active a {
      color: var(--text-color-selected);
      font-weight: bold;
      font-size: 2.6rem;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    padding-bottom: 1rem;
  }
</style>
