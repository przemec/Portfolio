<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import smoothscroll from 'smoothscroll-polyfill';
  import HideHeader from '../helpers/HideHeader';
  import MobileNav from '$lib/MobileNav/index.svelte';
  import DesktopNav from '$lib/DesktopNav/index.svelte';
  import LinksPanelHorizontal from '$lib/LinksPanelHorizontal.svelte';
  import '../app.css';
  onMount(() => {
    HideHeader();
    smoothscroll.polyfill();
    document.querySelector($page.url.hash).scrollIntoView({behavior: 'smooth'});
  });
</script>

<header>
  <nav>
    <img src="favicon.png" alt="logo" width="40" height="40" />
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
  <div id="verticalfiller" />
  <main>
    <slot />
  </main>

  <footer>
    <div id="linkscontainer">
      <LinksPanelHorizontal />
    </div>
    <p>&copy 2022 | Designed & coded by Przemek Szczepaniak</p>
  </footer>
</div>

<style>
  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100vw;
    background: var(--background);
    transition: background 0.3s ease-in-out, top 0.3s, padding 0.3s, box-shadow 0.3s, height 0.3s;
  }
  @media (min-width: 800px) {
    header {
      padding: 0 30px;
    }
  }
  header img {
    z-index: 3;
  }
  header nav {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  main {
    min-height: 100vh;
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
      padding-left: 140px;
    }
  }
  #verticalfiller {
    display: none;
    position: fixed;
    top: 50%;
    left: 0px;
    height: 300px;
    width: 120px;
    transform: translateY(-50%);
    background: grey;
  }
  @media (min-width: 800px) {
    #verticalfiller {
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
  }
  @media (min-width: 800px) {
    footer {
      height: 80px;
    }
  }
  footer p {
    width: 100%;
    letter-spacing: 0.1em;
    text-align: center;
  }
  #linkscontainer {
    width: 100%;
    height: 50px;
  }
  @media (min-width: 800px) {
    #linkscontainer {
      display: none;
    }
  }
</style>
