<script>
  import PlaylistRandomizer from '$lib/FeaturedProjects/PlaylistRandomizer.svelte';
  import Novum from '$lib/FeaturedProjects/Novum.svelte';
  import RegionConquest from '$lib/FeaturedProjects/RegionConquest.svelte';
  import NurseScheduling from '$lib/FeaturedProjects/NurseScheduling.svelte';
</script>

<section id="projects">
  <h1>Featured Projects</h1>
  <PlaylistRandomizer />
  <Novum />
  <RegionConquest />
  <NurseScheduling />
</section>

<style lang="scss">
  section {
    position: relative;
    width: 100%;
    max-width: 100rem;
    padding: 10vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
  }
  h1 {
    width: 100%;
    text-align: center;
    font-size: clamp(3.5rem, 10vw, 4.5rem);
    margin-bottom: 2.5rem;
    user-select: none;
  }
</style>
