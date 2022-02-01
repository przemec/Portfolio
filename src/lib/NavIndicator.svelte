<script>
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  let stripes_delays = [100, 130, 160];

  function customfly(node, { duration, delay = 0 }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
					--translateX: ${(1 - eased) * 30}vw;
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

<style>
  #navindicator {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }
  #navindicator div {
    position: absolute;
    --translateY: -5px;
    --translateX: 0;
    transform: rotate(0deg) translateY(var(--translateY)) translateX(var(--translateX));
    width: 55%;
    height: 10px;
    border-radius: 5px;
  }
  #navindicator div:nth-child(1) {
    right: -37%;
    background: var(--primary);
    --translateY: -15px;
  }
  #navindicator div:nth-child(2) {
    right: -30%;
    background: #eee;
  }
  #navindicator div:nth-child(3) {
    right: -35%;
    background: var(--secondary);
    --translateY: 5px;
  }
</style>
