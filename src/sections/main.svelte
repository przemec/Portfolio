<section id="main">
  <h2>Hello,</h2>
  <h1 id="name">
    I'm <strong>Przemek</strong>,
  </h1>
  <p>
    <strong>Front End Developer</strong><br />
    with a passion for building aesthetic,
    clean looking websites.
  </p>
  <div id="scroll-tip" />
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    width: 100%;
    max-width: 100rem;
    padding: 9rem 2rem 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
    user-select: none;
  }
  @media (min-width: 800px) {
    section {
      padding: 9rem 2rem;
    }
  }
  h2 {
    font-size: 3.2rem;
    font-size: clamp(2.5rem, 7vw, 3.5rem);
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
    font-size: clamp(5rem, 15vw, 7.5rem);

    strong {
      font-family: 'Concert One', cursive;
      font-weight: bold;
      text-shadow: 0.2rem 0.1rem var(--background), 0.3rem 0.2rem var(--primary);
      letter-spacing: 0.1rem;
    }
  }
  p {
    max-width: 55rem;
    line-height: 1.4;
    font-size: 3rem;
    font-size: clamp(2.5rem, 7vw, 3.5rem);
    text-align: center;

    strong {
      font-size: 3.2rem;
      font-size: clamp(3rem, 8vw, 4rem);
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
