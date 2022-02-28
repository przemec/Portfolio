<script>
  export let text = '';
</script>

<div class="tooltip-wrapper">
  <div class="tooltip">
    <div class="content">{text}</div>
    <div class="pointer" />
  </div>
</div>

<style lang="scss">
  @media (max-width: 400px) {
    .tooltip-wrapper {
      display: none;
    }
  }
  .tooltip-wrapper {
    position: absolute;
    top: -4rem;
    left: 50%;
    user-select: none;
    pointer-events: none;
    animation: fadein 0.3s forwards;

    .tooltip {
      position: relative;
      height: 3rem;
    }
    .content {
      position: absolute;
      top: 0;
      left: 50%;
      height: 3rem;
      line-height: 2.3rem;
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
      border-radius: 0.5rem;
      transform: translate(-50%);
      color: var(--text-color-selected);
      background: var(--selection-background);
    }
    .pointer {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -0.1rem);
      border: 0.6rem solid transparent;
      border-top-color: var(--selection-background);
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
