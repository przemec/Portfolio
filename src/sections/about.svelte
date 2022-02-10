<script>
  const age = Math.floor(new Date().getFullYear() - 2000.5);
</script>

<section id="about">
  <div id="about-container">
    <div class="stripes">
      <div />
      <div />
      <div />
    </div>
    <h1>About Me</h1>
    <p>
      I'm {age} years old
      <a
        href="#skills"
        on:click={(e) => {
          e.preventDefault();
          document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        }}
        >Frond End Developer
      </a>
      located in Cracow, Poland. My passion is building aesthetic, clean-looking, pixel-perfect websites.
    </p>
    <p>
      Apart from programming I'm into reading books, travelling and <a
        href="https://www.instagram.com/przemek.13/"
        target="_blank">amateur photography</a
      >. I've also got interest in blockchain and cryptocurrencies.
    </p>
    <p>
      I'm well-organised person who loves solving problems. My affection towards coding started in
      high school, where I wrote my first lines of JavaScript.
    </p>
    <p>
      In the future I want to further explore Front End industry, as well as to learn more about
      Back End technologies, so that I can define myself as a Full Stack Developer.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    max-width: 800px;
    padding: 10vh 0 20vh;
  }
  #about-container {
    position: relative;
    width: 100%;
    padding: 3rem 1rem;
    border-radius: 1rem;
    background: var(--background-light);
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
    font-size: 2rem;

    a {
      text-decoration: none;
      color: var(--secondary);
    }
  }
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
  .stripes div {
    position: absolute;
    top: -30px;
    right: 0;
    width: 900px;
    height: 20px;
    transform: rotate(45deg);
    transform-origin: left;
    border-radius: 5px;
    background: var(--background-lightest);

    &:nth-child(1) {
      left: 40%;
    }
    &:nth-child(2) {
      left: 30%;
    }
    &:nth-child(3) {
      left: 20%;
    }
  }
</style>
