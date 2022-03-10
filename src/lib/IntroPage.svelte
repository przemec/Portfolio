<div id="intro_wrapper" class="fullscreen" on:wheel={(e) => e.preventDefault()}>
  <div id="intro_background_color" class="fullscreen" />
  <div id="intro_background_grey" class="fullscreen" />
</div>

<style lang="scss">
  .fullscreen {
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  #intro_wrapper {
    background: repeating-linear-gradient(
      45deg,
      var(--background) 0rem,
      var(--background) 2rem,
      var(--background-light) 2rem,
      var(--background-light) 4rem,
      var(--background) 4rem,
      var(--background) 4.5rem,
      var(--background-light) 4.5rem,
      var(--background-light) 6.5rem,
      var(--background) 6.5rem,
      var(--background) 7rem,
      var(--background-light) 7rem,
      var(--background-light) 9rem,
      var(--background) 9rem,
      var(--background) 10rem
    );
  }
  #intro_background_color {
    clip-path: circle(0% at 50% 50%);
    background: repeating-linear-gradient(
      45deg,
      var(--background) 0rem,
      var(--background) 2rem,
      var(--text-color) 2rem,
      var(--text-color) 4rem,
      var(--background) 4rem,
      var(--background) 4.5rem,
      var(--primary) 4.5rem,
      var(--primary) 6.5rem,
      var(--background) 6.5rem,
      var(--background) 7rem,
      var(--secondary) 7rem,
      var(--secondary) 9rem,
      var(--background) 9rem,
      var(--background) 10rem
    );
  }
  #intro_background_grey {
    z-index: 21;
    clip-path: circle(0% at 50% 50%);
    background: var(--background);
  }
</style>
