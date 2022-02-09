<section id="about">
  <h2>Hello,</h2>
  <h1 id="name">
    I'm <strong>Przemek</strong>,
  </h1>
  <h3>Front End Developer</h3>
  <div id="scroll-tip" />
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
  #scroll-tip {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 2.5rem;
    height: 4rem;
    transform: translateX(-50%);
    border: 0.15rem solid rgba(255, 255, 255, 0.3);
    border-radius: 3rem;
    opacity: 0;
    animation: fadein 2s forwards;
    animation-delay: 2s;

    &::before {
      content: '';
      width: 0.7rem;
      height: 0.7rem;
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      opacity: 1;
      animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 2.7rem;
    }
  }
  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 2.7rem;
    }
  }
  @keyframes fadein {
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    to {
      opacity: 1;
    }
  }
</style>
