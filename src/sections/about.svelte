<script>
  const age = Math.floor(new Date().getFullYear() - 2000.5);
</script>

<section id="about">
  <div id="about-container">
    <div class="stripes" />
    <h1>About Me</h1>
    <p>
      I'm {age} years old
      <a
        href="#skills"
        on:click={(e) => {
          e.preventDefault();
          document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        }}>web developer</a
      > located in Cracow, Poland.
    </p>
    <p>
      Apart from programming I'm into reading books, travelling and amateur photography. I've also
      got interest in blockchain and cryptocurrencies.
    </p>
    <p>
      I'm well-organised person who loves
      <a
        href="#projects"
        on:click={(e) => {
          e.preventDefault();
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        }}>solving problems</a
      >. My affection towards coding started in high school, where I wrote my first lines of
      JavaScript.
    </p>
    <p>
      In
      <a
        href="#contact"
        on:click={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>the future</a
      > I want to further explore Front End industry, as well as to learn more about Back End technologies,
      so that I can define myself as a Full Stack Developer.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    max-width: 100rem;
    padding: 10vh 0 20vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  #about-container {
    position: relative;
    width: 100%;
    padding: 3rem 1rem;
    border-radius: 1rem;
    color: var(--text-color);
    overflow: hidden;
  }
  @media (min-width: 800px) {
    #about-container {
      padding: 4rem 2rem;
    }
  }
  h1 {
    position: relative;
    z-index: 1;
    font-size: clamp(30px, 10vw, 45px);
    margin-bottom: 1rem;
  }
  p {
    position: relative;
    z-index: 1;
    max-width: 80rem;
    font-size: 2rem;

    a {
      text-decoration: none;
      color: var(--primary);
    }
  }
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
  .stripes {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90rem;
    height: 10rem;
    transform: translate(-50%, -50%) rotate(45deg);
    background: linear-gradient(
      0deg,
      var(--background-light) 20%,
      var(--background) 20%,
      var(--background) 40%,
      var(--background-light) 40%,
      var(--background-light) 60%,
      var(--background) 60%,
      var(--background) 80%,
      var(--background-light) 80%
    );
  }
</style>
