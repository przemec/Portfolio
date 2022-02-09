<script>
  const age = Math.floor(new Date().getFullYear() - 2000.5);
</script>

<section id="about">
  <h1>About Me</h1>
  <p>
    I'm {age} years old Frond End Developer located in Cracow, Poland. 
    My passion is building aesthetic, clean-looking, pixel-perfect websites.
  </p>
  <p>
    I'm well-organised person who loves solving problems. 
    My affection towards coding started in high school, where I wrote my first lines of JavaScript.
  </p>
  <p>
    In the future I want to explore further Front End industry, as well as to learn more about Back End technologies, 
    so that I can define myself as Full Stack Developer.
  </p>
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    padding: 30px 10px 20px;
    color: var(--text-color);
  }
  h1 {
    font-size: clamp(30px, 10vw, 45px);
    text-align: center;
  }
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>
