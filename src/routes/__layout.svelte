<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import '../app.css';
</script>

<Nav />

<main>
  <slot />
</main>


<footer>
  <p>&copy Przemysław Szczepaniak</p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: var(--text-color)
  }

</style>
