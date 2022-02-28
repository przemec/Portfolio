<script lang="ts">
  import { onMount } from 'svelte';
  import tilt from '$interactions/tilt';
  import FutureSkills from './components/FutureSkills.svelte';
  import KnownSkills from './components/KnownSkills.svelte';
  import MinorSkills from './components/MinorSkills.svelte';

  let active_index = 0;
  let set_active_next = () => {
    active_index = active_index === 2 ? 0 : active_index + 1;
  };
  let set_active_prev = () => {
    active_index = active_index === 0 ? 2 : active_index - 1;
  };
  let ismobile = false;
  onMount(() => {
    const navigation = document.querySelector('#carousel-navigation') as HTMLElement;
    const maincard = document.querySelectorAll('.maincard')[0] as HTMLElement;
    const fixButtonsPosition = () => {
      navigation.style.transform = `translate(-50%, ${
        maincard.offsetHeight * 0.5 + maincard.offsetHeight * 0.2 - navigation.offsetHeight * 0.5
      }px)`;
      navigation.style.width = `${maincard.offsetWidth + navigation.offsetHeight * 2.5}px`;
      if (document.body.getBoundingClientRect().width < 800 && !ismobile) ismobile = true;
      else if (document.body.getBoundingClientRect().width >= 800 && ismobile) ismobile = false;
    };
    fixButtonsPosition();
    const resizeObserver = new ResizeObserver(fixButtonsPosition);
    resizeObserver.observe(maincard);
  });
</script>

<div id="skills-carousel">
  <div id="carousel-navigation">
    <button on:click={set_active_prev} class="button-prev">
      <svg viewBox="0 0 22 22">
        <path
          d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
          transform="matrix(-.03541-.00013-.00013.03541 19.02 3.02)"
          fill="currentColor"
        />
      </svg>
    </button>
    <button on:click={set_active_next} class="button-next">
      <svg viewBox="0 0 22 22">
        <path
          d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
          transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
  <div
    class="skills-wrapper"
    class:maincard={active_index === 0}
    class:rightcard={active_index === 2}
    class:leftcard={active_index === 1}
    use:tilt={{ isactive: active_index === 0 && !ismobile }}
  >
    <div class="skills-group">
      <h2>Technologies & tools I feel comfortable working with:</h2>
      <KnownSkills />
    </div>
  </div>
  <div
    class="skills-wrapper"
    class:maincard={active_index === 1}
    class:rightcard={active_index === 0}
    class:leftcard={active_index === 2}
    use:tilt={{ isactive: active_index === 1 && !ismobile }}
  >
    <div class="skills-group">
      <h2>Technologies & tools I know the very basics of:</h2>
      <MinorSkills />
    </div>
  </div>
  <div
    class="skills-wrapper"
    class:maincard={active_index === 2}
    class:rightcard={active_index === 1}
    class:leftcard={active_index === 0}
    use:tilt={{ isactive: active_index === 2 && !ismobile }}
  >
    <div class="skills-group">
      <h2>Technologies & tools I intend to learn in the future:</h2>
      <FutureSkills />
    </div>
  </div>
</div>

<style lang="scss">
  #carousel-navigation {
    display: none;
  }
  .skills-wrapper {
    width: 100%;
    user-select: none;
    padding: 3rem 0 1rem;
    &:nth-of-type(2n) {
      background: var(--background-light);
    }

    h2 {
      width: 100%;
      margin-bottom: 2rem;
      font-size: clamp(2rem, 5vw, 2.5rem);
      line-height: 1.3;
      text-align: center;
    }
  }
  @media (min-width: 800px) {
    #skills-carousel {
      width: 100%;
      min-height: 60rem;
      min-height: max(65vh, 60rem);
      transform-style: preserve-3d;
      perspective: 1000px;

      #carousel-navigation {
        position: absolute;
        left: 50%;
        width: 100%;
        height: 5rem;
        transform: translateX(-50%);
        transition: transform 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          cursor: pointer;
          z-index: 2;
          height: 100%;
          width: 5rem;
          padding: 0;
          transition: color 0.2s ease-in-out;
          color: var(--text-color);
          background: transparent;
          border: none;

          svg {
            width: 5rem;
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease-in-out;
          }
          &:hover,
          &:focus-visible {
            color: var(--primary);
          }
          &.button-prev:hover svg,
          &.button-prev:focus-visible svg {
            transform: translateX(-0.7rem);
          }
          &.button-next:hover svg,
          &.button-next:focus-visible svg {
            transform: translateX(0.7rem);
          }
        }
      }
      .skills-wrapper {
        position: absolute;
        top: 0;
        left: 50%;
        width: 80%;
        width: clamp(40rem, 50vw, 70rem);
        height: 60%;
        height: clamp(45rem, 50vh, 50rem);
        margin: 0;
        padding: 0;
        background: var(--background);
        border-radius: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        .skills-group {
          position: relative;
          width: 80%;
          width: clamp(40rem, 50vw, 70rem);
          height: 60%;
          height: clamp(45rem, 50vh, 50rem);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: var(--background-lightest);
          border-radius: 1rem;
          transition: opacity 0.3s ease-in-out;
        }
      }
      .skills-wrapper.maincard {
        transform: translate(-50%, 20%);
      }
      .skills-wrapper.rightcard {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
        transform: translate(-30%, 0%) translateZ(-100px) scale(1.07) rotateY(-8deg);
        .skills-group {
          opacity: 0.4;
        }
      }
      .skills-wrapper.leftcard {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transform: translate(-70%, 5%) translateZ(-200px) scale(1.15) rotateY(15deg);
        .skills-group {
          opacity: 0.2;
        }
      }
    }
  }
</style>
