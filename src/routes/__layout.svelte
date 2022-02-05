<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import smoothscroll from 'smoothscroll-polyfill';
  import HideHeader from '$helpers/HideHeader';
  import MobileNav from '$lib/MobileNav/index.svelte';
  import LinksPanelHorizontal from '$lib/LinksPanelHorizontal.svelte';
  import DesktopNav from '$lib/DesktopNav/index.svelte';
  import LinksPanelVertical from '$lib/LinksPanelVertical.svelte';
  import '../app.css';
  onMount(() => {
    HideHeader();
    smoothscroll.polyfill();
    $page.url.hash && document.querySelector($page.url.hash).scrollIntoView({ behavior: 'smooth' });
  });
</script>

<header>
  <nav>
    <div id="logo">logo</div>
    <div id="desktop_nav">
      <DesktopNav />
    </div>
    <div id="mobile_nav">
      <MobileNav />
    </div>
    <div id="filler" />
  </nav>
</header>

<div id="content">
  <div id="vertical_links">
    <LinksPanelVertical />
  </div>
  <main>
    <slot />
  </main>

  <footer>
    <div id="footer_links">
      <LinksPanelHorizontal />
    </div>
    <p>&copy 2022 | Designed & coded by Przemek Szczepaniak</p>
  </footer>
</div>

<style lang="scss">
  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100%;
    padding: 0 20px;
    background: var(--background);
    transition: background 0.3s ease-in-out, top 0.3s, padding 0.3s, box-shadow 0.3s, height 0.3s;

    #logo {
      z-index: 3;
      width: 40px;
      height: 40px;
      background: var(--primary);
    }
    nav {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 800px) {
    header {
      padding: 0 40px;
    }
  }
  #desktop_nav,
  #filler {
    display: none;
  }
  @media (min-width: 800px) {
    #mobile_nav {
      display: none;
    }
    #desktop_nav {
      display: initial;
    }
    #filler {
      display: initial;
      width: 40px;
    }
  }
  #content {
    min-height: 100vh;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    transition: filter 0.2s linear;
  }
  @media (min-width: 800px) {
    main {
      padding: 0 140px;
    }
  }
  #vertical_links {
    display: none;
    position: fixed;
    top: 50%;
    left: 0px;
    height: 260px;
    width: 120px;
    transform: translateY(-50%);
  }
  @media (min-width: 800px) {
    #vertical_links {
      display: initial;
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    width: 100vw;
    height: 140px;

    p {
      width: 100%;
      letter-spacing: 0.1em;
      text-align: center;
    }
  }
  @media (min-width: 800px) {
    footer {
      height: 80px;
    }
  }
  #footer_links {
    width: 100%;
    height: 50px;
  }
  @media (min-width: 800px) {
    #footer_links {
      display: none;
    }
  }
</style>
