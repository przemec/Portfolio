<script>
  import { quintInOut } from 'svelte/easing';
  let stripes_delays = [0, 30, 60];

  function customfly(node, { duration, delay = 0 }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          transform: translateX(${(1 - eased) * 30}vw);
        `;
      }
    };
  }
</script>

<div id="navindicator">
  {#each stripes_delays as stripe}
    <div transition:customfly={{ duration: 200, delay: stripe }} />
  {/each}
</div>

<style lang="scss">
  #navindicator {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);

    div {
      position: absolute;
      transform: translateX(0);
      width: 55%;
      height: 1rem;
      border-radius: 0.5rem;
    }
    div:nth-child(1) {
      right: -37%;
      background: var(--primary);
      top: -1.6rem;
    }
    div:nth-child(2) {
      right: -30%;
      background: var(--text-color);
      top: -0.4rem;
    }
    div:nth-child(3) {
      right: -35%;
      background: var(--secondary);
      top: 0.8rem;
    }
  }
</style>
