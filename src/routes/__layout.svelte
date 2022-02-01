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
  main {
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100vw;
    box-sizing: border-box;
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
