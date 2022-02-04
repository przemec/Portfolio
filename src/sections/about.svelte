<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<section id="about">
  <h1 in:fade={{ duration: 200 }}>Hi, I'm <strong>Testing</strong></h1>
  <h2 in:fade={{ duration: 200 }}>Front End Developer</h2>
</section>

<style>
  section {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
  }
  h1 {
    height: 2em;
    line-height: 2em;
    text-align: center;
    font-size: 2em;
  }
  h1 strong {
    font-family: 'Concert One', cursive;
    font-weight: bold;
  }
  h2 {
    height: 1.6em;
    line-height: 1.6em;
    text-align: center;
    font-size: 1.6em;
  }
</style>
