<script lang="ts">
  import { onMount } from 'svelte';
  import HideHeader from '../helpers/HideHeader';
  import MobileNav from '$lib/MobileNav/index.svelte';
  import DesktopNav from '$lib/DesktopNav/index.svelte';
  import '../app.css';
  onMount(() => {
    HideHeader();
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
  <main>
    <slot />
  </main>

  <footer>
    <p>&copy Przemysław Szczepaniak</p>
  </footer>
</div>

<style>
  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100%;
    background: var(--background);
    transition: top 0.3s, padding 0.3s, box-shadow 0.3s, height 0.3s;
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
    header {
      padding: 0 30px;
    }
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
    height: 100%;
    flex: 1;
    width: 100vw;
    display: flex;
    flex-direction: column;
    transition: filter 0.2s linear;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: var(--text-color);
  }
</style>
