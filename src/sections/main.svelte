<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const name = document.getElementById('name');
    const setNameText = () => (name.getElementsByTagName('span')[0].innerText = `Przemek`);
    const setNamePhonetic = () => (name.getElementsByTagName('span')[0].innerText = `/p'ʃəmək/`);
    name.addEventListener('mouseenter', setNamePhonetic);
    name.addEventListener('focus', setNamePhonetic);
    name.addEventListener('mouseleave', () => setTimeout(setNameText, 300));
    name.addEventListener('blur', () => setTimeout(setNameText, 300));

    const audio = document.getElementById('name_pronunciation') as HTMLAudioElement;
    name.addEventListener('click', (e) => {
      e.preventDefault();
      audio.play();
    });
    name.addEventListener('keypress', (e) => {
      e.preventDefault();
      e.key === 'Enter' && audio.play();
    });
  });
</script>

<section id="main">
  <h2>Hello,</h2>
  <h1>
    <audio id="name_pronunciation" src="/forvo-com_pronunciation_przemek.mp3" />
    <div>I'm&nbsp</div>
    <a id="name" tabindex="0" href="https://forvo.com/word/przemek/" target="_blank">
      <span>Przemek</span>,
    </a>
  </h1>
  <p>
    <strong>Front End Developer</strong><br />
    with a passion for building aesthetic, clean looking websites.
  </p>
  <div id="scroll-tip" />
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    width: 100%;
    max-width: 100rem;
    padding: 9rem 0.5rem 20rem;
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
    transform: translateY(1rem);
  }
  h1 {
    color: var(--text-color-selected);
    font-size: 6.2rem;
    font-size: clamp(5rem, 12vw, 7.5rem);
    height: clamp(7rem, 15vw, 9.5rem);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    #name {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      color: var(--text-color-selected);

      span {
        letter-spacing: 0.1rem;
        color: transparent;
      }
      span::before {
        content: 'Przemek';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        color: var(--text-color-selected);
        font-weight: bold;
        text-shadow: 0.2rem 0.1rem var(--background), 0.3rem 0.3rem var(--primary);
        letter-spacing: 0.1rem;
        transition: transform 0.3s ease-in-out;
        transform: translateY(0%);
      }
      span::after {
        content: "/p'ʃəmək/";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        color: var(--primary);
        letter-spacing: 0.1rem;
        transition: transform 0.3s ease-in-out;
        transform: translateY(100%);
      }
      &:hover span::before,
      &:focus-visible span::before {
        transform: translateY(-100%);
      }
      &:hover span::after,
      &:focus-visible span::after {
        transform: translateY(0%);
      }
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
</style>
