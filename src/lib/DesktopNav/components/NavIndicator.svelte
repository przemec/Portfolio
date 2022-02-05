<script>
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  let stripes_delays = [0, 30, 60];

  function customfly(node, { duration, delay = 0 }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
          transform: translateY(-${(1 - eased) * 10}vh);
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
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    div {
      position: absolute;
      transform: translateY(0);
      width: 10px;
      height: 100%;
      border-radius: 5px;
      &:nth-child(1) {
        top: -92%;
        left: -18px;
        background: var(--primary);
      }
      &:nth-child(2) {
        top: -82%;
        left: -7px;
        background: #eee;
      }
      &:nth-child(3) {
        top: -87%;
        left: 4px;
        background: var(--secondary);
      }
    }
  }
</style>
