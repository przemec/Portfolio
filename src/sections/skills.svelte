<script lang="ts">
  import SkillsCarousel from '$lib/SkillsCarousel/index.svelte';
</script>

<section id="skills">
  <h1>My Skills</h1>
  <SkillsCarousel />
</section>

<style lang="scss">
  section {
    position: relative;
    width: 100%;
    max-width: 100rem;
    padding: 10vh 0.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);

    h1 {
      width: 100%;
      text-align: center;
      font-size: clamp(3rem, 10vw, 4.5rem);
      margin-bottom: 2.5rem;
      user-select: none;
    }
  }
</style>
