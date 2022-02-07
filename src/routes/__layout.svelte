<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import smoothscroll from 'smoothscroll-polyfill';
  import OnWindowScroll from '$helpers/OnWindowScroll';
  import MobileNav from '$lib/MobileNav/index.svelte';
  import LinksPanelHorizontal from '$lib/LinksPanelHorizontal.svelte';
  import DesktopNav from '$lib/DesktopNav/index.svelte';
  import LinksPanelVertical from '$lib/LinksPanelVertical.svelte';
  import '../app.css';

  let active_section = '';
  let sections = ['about', 'skills', 'projects', 'contact'];
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.7) {
            active_section = entry.target.id;
          }
        });
      },
      {
        threshold: 0.7
      }
    );
    sections.forEach((section) => {
      const section_element = document.querySelector(`#${section}`);
      if (section_element) observer.observe(section_element);
    });

    OnWindowScroll();
    smoothscroll.polyfill();
    $page.url.hash && document.querySelector($page.url.hash).scrollIntoView({ behavior: 'smooth' });
  });
</script>

<svelte:head>
  <title>Przemek | Front End Developer</title>
</svelte:head>

<header>
  <nav>
    <div id="logo" />
    <div id="desktop_nav">
      <DesktopNav {active_section} />
    </div>
    <div id="mobile_nav">
      <MobileNav {active_section} />
    </div>
    <div id="filler" />
  </nav>
</header>

<div id="content">
  <main>
    <slot />
  </main>
  <div id="vertical_links">
    <LinksPanelVertical />
  </div>

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
      background: url("./logo.png");
      background-size: cover;
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
    width: 100%;
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
    right: 0px;
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
    width: 100%;
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
