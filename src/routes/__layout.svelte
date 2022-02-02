<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import '../app.css';
</script>

<header>
  <Nav />
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
  #content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
