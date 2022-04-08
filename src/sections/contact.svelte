<script lang="ts">
  import Tooltip from '$lib/Tooltip.svelte';
  import { tooltip } from '$interactions/tooltip';
  import ContactLinks from '$lib/ContactLinks.svelte';

  const copyEmail = () => {
    navigator.clipboard.writeText('pszczepaniak000@gmail.com');
    (document.querySelector('.tooltip-wrapper .content') as HTMLElement).innerText =
      'Email has been copied!';
  };
</script>

<section id="contact">
  <h1>Get In Touch</h1>
  <p>
    Although I'm not currently looking for any new opportunities, I'm always open to talk. If You
    have any questions, don't hesitate to contact me.
  </p>
  <button
    use:tooltip={{ content: Tooltip, text: 'Copy email to clipboard', isKeyboardFocusable: true }}
    on:click={copyEmail}
  >
    <h2>pszczepaniak000@gmail.com</h2>
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>
  </button>
  <a href="mailto:pszczepaniak000@gmail.com">Let's talk!</a>
  <ContactLinks />
</section>

<style lang="scss">
  section {
    position: relative;
    min-height: 100vh;
    min-height: calc(100vh - 14rem);
    width: 100%;
    max-width: 100rem;
    padding: 0 0.5rem 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--text-color);
  }
  @media (min-width: 800px) {
    section {
      min-height: calc(100vh - 8rem);
    }
  }
  h1 {
    font-size: clamp(4rem, 8vw, 6rem);
    margin-bottom: 1rem;
    text-align: center;
  }
  p {
    max-width: 60rem;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    margin-bottom: 1rem;
    text-align: center;
  }
  button {
    position: relative;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.2rem;
    background: transparent;
    border: none;
    color: var(--text-color);
    font-family: 'Baloo Paaji 2', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    h2 {
      transition: color 0.2s ease-in-out;
      font-size: clamp(2rem, 6vw, 3rem);
      pointer-events: none;
    }
    svg {
      transition: color 0.2s ease-in-out;
      width: 3rem;
      height: 3rem;
      pointer-events: none;
    }
    &:hover h2,
    &:focus-visible h2 {
      color: var(--text-color-selected);
    }
    &:hover svg,
    &:focus-visible svg {
      color: var(--primary);
    }
  }
  a {
    text-decoration: none;
    display: block;
    padding: 0 2rem;
    font-size: clamp(2rem, 7vw, 3rem);
    color: var(--text-color);
    border: 0.2rem solid currentColor;
    outline: 0.2rem dashed currentColor;
    outline-offset: -0.2rem;
    border-radius: 1rem;
    transition: color 0.3s ease-in-out, outline-offset 0.15s ease;

    &:hover,
    &:focus-visible {
      color: var(--primary);
      outline-offset: 0.3rem;
    }
  }
</style>
