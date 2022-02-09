<script>
  import { page } from '$app/stores';
</script>

<section>
  <h1>{$page.status}</h1>
  <h2>Page not found</h2>
  <p>Looks like the link you entered may be broken or the page may have been removed.</p>
  <a href="/">Return to main page</a>
</section>

<style lang="scss">
  section {
    color: var(--text-color);
    min-height: 30vh;
    width: 100%;
    padding: 110px 30px 30px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    font-size: 8rem;
    color: var(--primary);
    line-height: 8rem;
  }
  h2 {
    font-size: 4.5rem;
    margin-bottom: 1.6rem;
    line-height: 4.5rem;
  }
  p {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-top: 1.6rem;
  }
  a {
    color: var(--secondary);
    font-size: 2.4rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      color: var(--secondary);
      text-decoration: underline;
    }
  }
</style>
