<section id="main">
  <h2>Hello,</h2>
  <h1 id="name">
    I'm <strong>Przemek</strong>,
  </h1>
  <p>
    <strong>Front End Developer</strong><br />
    with a passion for building<br />
    aesthetic, clean looking websites.
  </p>
  <div id="scroll-tip" />
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
    padding: 9rem 2rem 20rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
  }
  @media (min-width: 800px) {
    section {
      padding: 9rem 2rem;
    }
  }
  h2 {
    font-size: 3.2rem;
    font-size: clamp(25px, 7vw, 35px);
    font-weight: 100;
  }
  @media (max-width: 800px) {
    h2 {
      transform: translateY(0.8rem);
    }
  }
  h1 {
    color: var(--text-color-selected);
    font-size: 6.2rem;
    font-size: clamp(50px, 15vw, 75px);

    strong {
      font-family: 'Concert One', cursive;
      font-weight: bold;
      text-shadow: 0.2rem 0.1rem var(--background), 0.3rem 0.2rem var(--primary);
      letter-spacing: 0.1rem;
    }
  }
  p {
    line-height: 1.4;
    font-size: 3rem;
    font-size: clamp(25px, 7vw, 35px);

    strong {
      font-size: 3.2rem;
      font-size: clamp(30px, 8vw, 40px);
      font-weight: bold;
    }
  }
  #scroll-tip {
    position: absolute;
    left: 50%;
    top: 90vh;
    top: calc(95vh - 6.4rem);
    width: 4rem;
    height: 6.4rem;
    transform: translateX(-50%);
    border: 0.2rem solid rgba(255, 255, 255, 0.3);
    border-radius: 5.4rem;
    opacity: 0;
    animation: fadein 2s forwards;
    animation-delay: 1s;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 1.4rem;
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
      top: 4rem;
    }
  }
  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 4rem;
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
