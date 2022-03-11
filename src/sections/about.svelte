<script>
  import { scroll } from '$store';
  const age = Math.floor(new Date().getFullYear() - 2000.5);
</script>

<section id="about">
  <div id="about-container">
    <div class="stripesWrap">
      <div
        class="stripes"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        data-scroll-id="stripes"
        data-scroll-target="#about-container"
      />
    </div>
    <h1>About Me</h1>
    <p>
      I'm a {age} years old
      <a
        href="#skills"
        on:click={() => {
          $scroll.scrollTo(document.querySelector('#skills'));
          window.history.replaceState(null, '', '#skills');
        }}>web developer</a
      > located in Cracow, Poland.
    </p>
    <p>
      I'm well-organised person who loves
      <a
        href="#projects"
        on:click={() => {
          $scroll.scrollTo(document.querySelector('#projects'));
          window.history.replaceState(null, '', '#projects');
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
        on:click={() => {
          $scroll.scrollTo(document.querySelector('#contact'));
          window.history.replaceState(null, '', '#contact');
        }}>the future</a
      > I want to further explore Front End industry, as well as to learn more about Back End technologies,
      so that I can define myself as a Full Stack Developer.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    max-width: 100rem;
    padding: 10vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #about-container {
    position: relative;
    width: 100%;
    padding: 3rem 0.2rem;
    color: var(--text-color);
    overflow: hidden;
  }
  @media (min-width: 800px) {
    #about-container {
      border-radius: 2rem;
      padding: 5rem;
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
    transform: translate(-50%, -50%);

    .stripes {
      width: 130rem;
      height: 100vh;
      background: repeating-linear-gradient(
        45deg,
        var(--background-light) 0rem,
        var(--background-light) 8rem,
        var(--background) 8rem,
        var(--background) 10rem
      );
    }
  }
</style>
