<script>
  const age = Math.floor(new Date().getFullYear() - 2000.5);
</script>

<section id="about">
  <div id="about-container">
    <div class="stripesWrap">
      <div
        class="stripes"
        data-scroll
        data-scroll-speed="1.5"
        data-scroll-id="stripes"
        data-scroll-target="#about-container"
      />
    </div>
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
      Apart from programming I'm into reading books, travelling and amateur photography. I've also
      got interest in blockchain and cryptocurrencies.
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
    font-size: clamp(3rem, 10vw, 4.5rem);
    margin-bottom: 1rem;
  }
  p {
    position: relative;
    z-index: 1;
    max-width: 80rem;
    font-size: 2rem;

    a {
      position: relative;
      text-decoration: none;
      color: var(--primary);
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
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
  .stripesWrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    .stripes {
      width: 100rem;
      height: 10rem;
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
  }
</style>
