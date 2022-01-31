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
					--translateY: -${(1 - eased) * 2}em;
        `;
      }
    };
  }
</script>

<div id="navindicator">
  {#each stripes_delays as stripe}
    <div
      in:customfly={{ duration: 200, delay: stripe }}
      out:fade={{ duration: 100, delay: 200 }}
    />
  {/each}
</div>

<style>
  #navindicator {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
  }
  #navindicator div {
    position: absolute;
    top: -30%;
    --translateY: 0;
    --translateX: -5px;
    transform: rotate(0deg) translateY(var(--translateY)) translateX(var(--translateX));
    width: 10px;
    height: 45%;
  }
  #navindicator div:nth-child(1) {
    background: var(--primary);
    --translateX: -16px;
  }
  #navindicator div:nth-child(2) {
    top: -20%;
    background: #eee;
  }
  #navindicator div:nth-child(3) {
    background: var(--secondary);
    --translateX: 6px;
  }
</style>
