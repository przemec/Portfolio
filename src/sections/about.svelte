<section id="about">
  <h2>Hello,</h2>
  <h1 id="name">
    I'm <strong>Przemek</strong>,
  </h1>
  <h3>Front End Developer</h3>
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    width: 100%;
    padding: 90px 20px 200px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
  }
  @media (min-width: 800px) {
    section {
      padding: 90px 20px;
      align-items: center;
    }
  }
  h2 {
    height: 4rem;
    font-size: 3rem;
    text-align: center;
  }
  h1 {
    height: 5rem;
    font-size: 3.5rem;
    text-align: center;

    strong {
      font-family: 'Concert One', cursive;
      font-weight: bold;
      text-shadow: 0.1rem 0.05rem var(--background), 0.2rem 0.1rem var(--primary);
      letter-spacing: 0.1rem;
    }
  }
  h3 {
    margin-top: 0.4rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
  }
</style>
