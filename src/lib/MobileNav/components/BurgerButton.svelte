<script>
  import { fade } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  export let ishidden;
  export let set_hidden;

  function to_exit(node, { duration = 300, delay = 0, translate_dir, rotate_dir }) {
    const initial_width = node.offsetWidth;
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${(1 - eased) * 4 + (initial_width/10)}rem;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 1.4}rem) rotate(${
          rotate_dir === 'right' ? '-' : ''
        }${(1 - eased) * 45}deg);
        `;
      }
    };
  }
  function to_burger(node, { duration = 300, delay = 0, translate_dir, rotate_dir, width }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${eased + width}rem;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 1.4}rem) rotate(${
          rotate_dir === 'right' ? '-' : ''
        }${eased * 45}deg);
        `;
      }
    };
  }
  function to_nav(node, { duration = 800, delay = 0 }) {
    const initial_width = node.offsetWidth;
    const { y: initial_y } = node.getBoundingClientRect();
    const { innerHeight: window_height, innerWidth: window_width } = window;
    const translateY = (Math.round(window_height / 2) - initial_y)/10;
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${(1 - eased) * (Math.round(window_width * 0.8 - 75)/10) + (initial_width/10)}rem;
          transform: translateY(${(1 - eased) * translateY}rem);
        `;
      }
    };
  }
</script>

<button on:click={() => set_hidden(!ishidden)}>
  {#if ishidden}
    <span class="hamburger" out:to_exit={{ translate_dir: 'down', rotate_dir: 'right' }} />
    <span class="hamburger" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }} />
    <span class="hamburger" out:to_exit={{ translate_dir: 'up', rotate_dir: 'left' }} />
  {:else}
    <span class="exit" out:to_burger={{ translate_dir: 'up', rotate_dir: 'right', width: 4 }} />
    <span class="exit" />
    <span class="exit" out:to_burger={{ translate_dir: 'down', rotate_dir: 'left', width: 3 }} />
  {/if}
</button>

<style lang="scss">
  button {
    z-index: 4;
    position: relative;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    overflow: visible;
    background: transparent;
    border: none;

    span {
      z-index: 4;
      position: absolute;
      right: 0;
      height: 0.3rem;
      max-width: 4rem;
      background: var(--text-color);
      will-change: transform, opacity, width;
    }
    .hamburger:nth-child(1) {
      top: 0.5rem;
      width: 4rem;
    }
    .hamburger:nth-child(2) {
      top: 1.9rem;
      width: 3.5rem;
      max-width: 80vw;
    }
    .hamburger:nth-child(3) {
      top: 3.3rem;
      width: 3rem;
    }
    .exit:nth-child(1) {
      top: 1.9rem;
      width: 4rem;
      transform: rotate(-45deg);
    }
    .exit:nth-child(2) {
      background: transparent;
    }
    .exit:nth-child(3) {
      top: 1.9rem;
      width: 4rem;
      transform: rotate(45deg);
    }
    &:focus-visible span {
      background-color: var(--primary);
    }
  }
</style>
