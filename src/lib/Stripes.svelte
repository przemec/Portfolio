<script>
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  function customfly(node, { duration, delay = 0 }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
					--translateY: ${(1 - eased) * 160}vh;
        `;
      }
    };
  }
</script>

<div id="stripes">
  <div in:customfly={{ duration: 200, delay: 100 }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 200 }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 300 }} out:fade={{ duration: 100 }} />
</div>

<style>
  #stripes {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  #stripes div {
    position: absolute;
    top: -20vh;
    left: 40vw;
    --translateY: 0vh;
    --translateX: 0;
    transform: rotate(-60deg) translateY(var(--translateY)) translateX(var(--translateX));
    width: 20px;
    height: 110vmax;
  }
  #stripes div:nth-child(1) {
    background: var(--primary);
    --translateX: -21px;
  }
  #stripes div:nth-child(2) {
    background: #eee;
  }
  #stripes div:nth-child(3) {
    background: var(--secondary);
    --translateX: 21px;
  }
</style>
