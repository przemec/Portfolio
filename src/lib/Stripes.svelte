<script>
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  function customfly(node, { duration, delay = 0, side }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
					--translateX: ${side === 'left' ? '-' : ''}${(1 - eased) * 20}vw;
        `;
      }
    };
  }
</script>

<div id="stripesleft" class="stripes">
  <div in:customfly={{ duration: 200, delay: 200, side: 'left' }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 100, side: 'left' }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 150, side: 'left' }} out:fade={{ duration: 100 }} />
</div>
<div id="stripesright" class="stripes">
  <div in:customfly={{ duration: 200, delay: 200, side: 'right' }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 100, side: 'right' }} out:fade={{ duration: 100 }} />
  <div in:customfly={{ duration: 200, delay: 150, side: 'right' }} out:fade={{ duration: 100 }} />
</div>

<style>
  .stripes {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .stripes div {
    position: absolute;
    top: 50%;
    --translateY: 0;
    --translateX: 0;
    transform: translateY(var(--translateY)) translateX(var(--translateX));
    width: 13vw;
    height: 20px;
    border-radius: 5px;
  }
  .stripes#stripesleft div {
    left: -10px;
  }
  .stripes#stripesright div {
    right: -10px;
  }
  .stripes div:nth-child(1) {
    background: var(--primary);
    --translateY: -31px;
    width: 9vw;
  }
  .stripes div:nth-child(2) {
    background: #eee;
    --translateY: -10px;
  }
  .stripes div:nth-child(3) {
    background: var(--secondary);
    --translateY: 11px;
    width: 11vw;
  }
</style>
