<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { scroll } from '$store';
  import { updateHeaderDisplay, updateScrollTipDisplay } from '$interactions/scroll-events';
  import IntroPage from '$lib/IntroPage.svelte';
  import MobileNav from '$lib/MobileNav/index.svelte';
  import LinksPanelHorizontal from '$lib/LinksPanelHorizontal.svelte';
  import DesktopNav from '$lib/DesktopNav/index.svelte';
  import LinksPanelVertical from '$lib/LinksPanelVertical.svelte';
  import Main from '$sections/main.svelte';
  import About from '$sections/about.svelte';
  import Contact from '$sections/contact.svelte';
  import Projects from '$sections/projects.svelte';
  import Skills from '$sections/skills.svelte';
  import HeaderLogo from '$lib/HeaderLogo.svelte';
  import SkipToContentButton from '$lib/SkipToContentButton.svelte';

  onMount(async () => {
    let LocomotiveScroll = (await import('locomotive-scroll')).default;
    let animatePageLoad = (await import('$interactions/gsap-page-load')).default;
    let initActiveSectionObserver = (await import('$interactions/active-section-observer')).default;

    scroll.set(
      new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getDirection: true,
        mobile: {
          breakpoint: 0,
          smooth: false,
          getDirection: true
        },
        tablet: {
          breakpoint: 0,
          smooth: false,
          getDirection: true
        }
      })
    );
    $scroll.scrollTo(0);
    const onPageLoadComplete = () => {
      initActiveSectionObserver();

      updateHeaderDisplay(0, 'up');
      $scroll.on('scroll', (args) => {
        updateScrollTipDisplay(args.scroll.y);
        updateHeaderDisplay(args.scroll.y, args.direction);
      });

      $page.url.hash && $scroll.scrollTo(document.querySelector($page.url.hash));
    };

    animatePageLoad(onPageLoadComplete);
  });
</script>

<SkipToContentButton />

<header>
  <nav>
    <HeaderLogo />
    <div id="desktop_nav">
      <DesktopNav />
    </div>
    <div id="mobile_nav">
      <MobileNav />
    </div>
    <div id="filler" />
  </nav>
</header>

<div id="vertical_links">
  <LinksPanelVertical />
</div>

<IntroPage />

<div data-scroll-container id="content">
  <main data-scroll-section>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
  <footer data-scroll-section>
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
    height: 9rem;
    width: 100%;
    padding: 0 2rem;
    background: var(--background);
    transition: background 0.3s ease-in-out, top 0.3s, padding 0.3s, box-shadow 0.3s, height 0.3s;

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
      padding: 0 4rem;
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
      width: 4rem;
    }
  }
  #content {
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-height: calc(100vh - 10rem);
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
    align-items: center;
    transition: filter 0.2s linear;
  }
  @media (min-width: 800px) {
    main {
      padding: 0 14rem;
    }
  }
  #vertical_links {
    z-index: 2;
    display: none;
    position: fixed;
    top: 50%;
    right: 0;
    height: 26rem;
    width: 12rem;
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
    height: 14rem;

    p {
      width: 100%;
      letter-spacing: 0.2rem;
      text-align: center;
    }
  }
  @media (min-width: 800px) {
    footer {
      height: 8rem;
    }
  }
  #footer_links {
    width: 100%;
    height: 5rem;
  }
  @media (min-width: 800px) {
    #footer_links {
      display: none;
    }
  }
</style>
