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
      located in Cracow, Poland. Building aesthetic, clean-looking, pixel-perfect websites is my passion.
    </p>
    <p>
      I'm well-organised person who loves solving problems. My affection towards coding started in
      high school, where I wrote my first lines of JavaScript.
    </p>
    <p>
      Apart from programming I'm into
      reading books, travelling and <a href="https://www.instagram.com/przemek.13/" target="_blank">amateur photography</a>.
      I've also got interest in blockchain and cryptocurrencies. 
    </p>
    <p>
      In the future I want to further explore Front End industry, as well as to learn more about
      Back End technologies, so that I can define myself as a Full Stack Developer.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    max-width: 700px;
    min-height: 100vh;
    padding-top: 3rem;
    perspective: 10px;
  }
  #about-container {
    position: relative;
    width: 100%;
    padding: 4rem 1rem;
    border-radius: 4px;
    background: var(--background-light);
    color: var(--text-color);
    perspective: 10px;
    transform-style: preserve-3d;
    overflow: hidden;
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
    // z-index: 0;
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
      transform: rotate(45deg) translateZ(-10px);
    }
    &:nth-child(2) {
      left: 30%;
    }
    &:nth-child(3) {
      left: 20%;
    }
  }
</style>
