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
          width: ${(1 - eased) * 40 + initial_width}px;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 14}px) rotate(${
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
          width: ${eased * 10 + width}px;
          transform: translateY(${translate_dir === 'up' ? '-' : ''}${(1 - eased) * 14}px) rotate(${
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
    const translateY = Math.round(window_height / 2) - initial_y;
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          width: ${(1 - eased) * Math.round(window_width * 0.8 - 75) + initial_width}px;
          transform: translateY(${(1 - eased) * translateY}px);
        `;
      }
    };
  }
</script>

<div role="button" on:click={() => set_hidden(!ishidden)}>
  {#if ishidden}
    <span class="hamburger" out:to_exit={{ translate_dir: 'down', rotate_dir: 'right' }} />
    <span class="hamburger" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }} />
    <span class="hamburger" out:to_exit={{ translate_dir: 'up', rotate_dir: 'left' }} />
  {:else}
    <span class="exit" out:to_burger={{ translate_dir: 'up', rotate_dir: 'right', width: 40 }} />
    <span class="exit" />
    <span class="exit" out:to_burger={{ translate_dir: 'down', rotate_dir: 'left', width: 30 }} />
  {/if}
</div>

<style lang="scss">
  [role='button'] {
    z-index: 4;
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    overflow: visible;

    span {
      z-index: 4;
      position: absolute;
      right: 0px;
      height: 3px;
      max-width: 40px;
      background: var(--text-color);
      will-change: transform, opacity, width;
    }
    .hamburger:nth-child(1) {
      top: 5px;
      width: 40px;
    }
    .hamburger:nth-child(2) {
      top: 19px;
      width: 35px;
      max-width: 80vw;
    }
    .hamburger:nth-child(3) {
      top: 33px;
      width: 30px;
    }
    .exit:nth-child(1) {
      top: 19px;
      width: 40px;
      transform: rotate(-45deg);
    }
    .exit:nth-child(2) {
      background: transparent;
    }
    .exit:nth-child(3) {
      top: 19px;
      width: 40px;
      transform: rotate(45deg);
    }
  }
</style>
