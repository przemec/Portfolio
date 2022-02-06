<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import BurgerButton from './components/BurgerButton.svelte';
  import NavIndicator from './components/NavIndicator.svelte';
  import LinksPanel from '../LinksPanelHorizontal.svelte';

  export let active_section;
  let tabs = [
    { title: 'about', href: '#about' },
    { title: 'skills', href: '#skills' },
    { title: 'projects', href: '#projects' },
    { title: 'contact', href: '#contact' }
  ];

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
          <div class="tab" class:active={active_section === tab.title}>
            {#if active_section === tab.title}<NavIndicator />{/if}
            <a
              href={tab.href}
              on:click={(e) => {
                set_hidden(true);
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
    max-width: 400px;
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

    a {
      height: 3em;
      width: 100%;
      text-align: center;
      color: var(--text-color);
      font-size: 1.2em;
      line-height: 3em;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: color 0.2s, font-size 0.2s;
    }
    a:hover {
      font-weight: bold;
      color: var(--text-color-selected);
    }
    &.active a {
      color: var(--text-color-selected);
      font-weight: bold;
      font-size: 1.6em;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    padding-bottom: 10px;
  }
</style>
