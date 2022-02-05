<script lang="ts">
  import { onMount } from 'svelte';

  let islogovisible = false;
  onMount(() => {
    const namecontainer = document.querySelector('#name');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        islogovisible = !entry.isIntersecting;
      });
    });
    observer.observe(namecontainer);
  });
</script>

<div id="p-logo" class:logovisible={islogovisible} class:logoinvisible={!islogovisible}>P</div>
<section id="about">
  <h2>Hello,</h2>
  <h1 id="name">
    I'm <strong>Przemek</strong>,
  </h1>
  <h3>Front End Developer</h3>
</section>

<style lang="scss">
  #p-logo {
    display: none;
    z-index: 3;
    position: fixed;
    width: 120px;
    top: 1px;
    left: 0px;
    height: 3rem;
    line-height: 3rem;
    font-size: 3rem;
    font-family: 'Concert One', cursive;
    font-weight: bold;
    text-align: center;
    transition: left 0.3s;
    color: var(--text-color);
    text-shadow: 1px 1px var(--background), 2px 2px var(--primary);
    animation: logoAppear 0.3s;
  }
  @media (min-width: 800px) {
    #p-logo {
      display: initial;

      &.logoinvisible {
        animation: logoDisappear 0.3s forwards;
      }
      &.logovisible {
        display: initial;
        animation: logoAppear 0.3s;
      }
    }
  }
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
  @keyframes logoAppear {
    0% {
      transform: translateX(3rem);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes logoDisappear {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(3rem);
      opacity: 0;
      display: none;
    }
  }
</style>
