<script lang="ts">
  import { scroll } from '$store';
</script>

<div
  id="logo"
  on:click={(e) => {
    e.preventDefault();
    $scroll.scrollTo(0);
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
  }
</style>
