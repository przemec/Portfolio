<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import Stripes from '$lib/Stripes.svelte';
</script>

<svelte:head>
  <title>Przemek | Junior Frond End Developer</title>
</svelte:head>

<Stripes />
<div>
  <h1 in:fade={{duration: 200}}>Hi, I'm <strong>Testing</strong></h1>
  <h2 in:fade={{duration: 200}}>Front End Developer</h2>
</div>

<style>
  div {
    position: absolute;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    align-items: center;
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
