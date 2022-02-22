<script>
  import { page } from '$app/stores';
  import '../app.css';
</script>

<section>
  <h1>{$page.status}</h1>
  <h2>Page not found</h2>
  <p>Looks like the link you entered may be broken or the page may have been removed.</p>
  <a href="/">Return to main page</a>
</section>
<footer>
  <p>&copy 2022 | Designed & coded by Przemek Szczepaniak</p>
</footer>

<style lang="scss">
  section {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--text-color);
    width: 100vw;
    height: 100vh;
    padding: 3rem 3rem 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

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
      max-width: 40rem;
      text-align: center;
      font-size: 2rem;
      line-height: 3rem;
    }
    a {
      position: relative;
      color: var(--secondary);
      font-size: 2.4rem;
      text-align: center;
      text-decoration: none;
    }
    a::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      right: 0;
      width: 100%;
      height: 0.2rem;
      background: currentColor;
      will-change: transform;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.2s ease-in-out;
    }
    a:hover::after,
    a:focus-visible::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  footer {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    width: 100%;
    padding: 0 1rem;

    p {
      width: 100%;
      letter-spacing: 0.2rem;
      text-align: center;
    }
  }
</style>
