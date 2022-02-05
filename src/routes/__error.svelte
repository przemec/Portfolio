<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Przemek | Junior Frond End Developer</title>
</svelte:head>

<section>
  <h1><strong>{$page.status}</strong></h1>
  <h1>Page not found</h1>
  <p>Looks like the link you entered may be broken or the page may have been removed.</p>
  <a href="/">Return to main page</a>
</section>

<style lang="scss">
  section {
    color: var(--text-color);
    min-height: 30vh;
    width: 100%;
    padding: 30px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    font-size: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    line-height: 3rem;
  }
  strong {
    font-size: 5rem;
    color: var(--primary);
  }
  p {
    font-size: 1.3rem;
    line-height: 1.6rem;
    margin-top: 1rem;
  }
  a {
    color: var(--secondary);
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      color: var(--secondary);
      text-decoration: underline;
    }
  }
</style>
