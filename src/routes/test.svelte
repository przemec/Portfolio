<svelte:head>
  <title>test</title>
</svelte:head>

<section>
  <h1>Hi,</h1>
  <h2>I'm testing</h2>
</section>

<animated>
  <div id="red" />
  <div id="white" />
  <div id="purple" />
</animated>

<footer>
  <p>&copy Przemysław Szczepaniak</p>
</footer>

<style>
  animated {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  animated div {
    position: absolute;
    top: 50vh;
    left: -300px;
    --translateY: 0px;
    transform: rotate(-103deg) translateY(var(--translateY));
    width: 200vw;
    height: 20px;
  }
  #red {
    z-index: -5;
    background: red;
    --translateY: -21px;
  }
  #white {
    background: white;
  }
  #purple {
    z-index: -5;
    background: purple;
    --translateY: 21px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
