<button
  id="logo"
  on:click={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '/');
  }}
/>

<style lang="scss">
  #logo {
    cursor: pointer;
    z-index: 3;
    width: 4rem;
    height: 4rem;
    background: url('/logo.png');
    background-size: cover;
    padding: 0;
    border: none;
  }
</style>
