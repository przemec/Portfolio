<script>
  import { quintInOut } from 'svelte/easing';

  function customfly(node, { duration, delay = 0 }) {
    return {
      duration,
      delay,
      css: (t) => {
        const eased = quintInOut(t);
        return `
					--translateY: ${(1 - eased) * 110}vh;
        `;
      }
    };
  }
</script>

<animated>
  <div in:customfly={{ duration: 200, delay: 500  }} out:customfly={{ duration: 200, delay: 200 }} />
  <div in:customfly={{ duration: 200, delay: 600 }} out:customfly={{ duration: 200, delay: 100 }} />
  <div in:customfly={{ duration: 200, delay: 700 }} out:customfly={{ duration: 200 }} />
</animated>

<style>
  animated {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  animated div {
    position: absolute;
    top: -20px;
    left: 300px;
    --translateY: 0vh;
    --translateX: 0;
    transform: rotate(-10deg) translateY(var(--translateY)) translateX(var(--translateX));
    width: 20px;
    height: 110vh;
  }
  animated div:nth-child(1) {
    background: var(--primary);
    --translateX: -21px;
  }
  animated div:nth-child(2) {
    background: #eee;
  }
  animated div:nth-child(3) {
    background: var(--secondary);
    --translateX: 21px;
  }
</style>
