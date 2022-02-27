<a href={'/#content'}>Skip to Content</a>

<style lang="scss">
  a {
    z-index: 5;
    position: absolute;
    top: 2rem;
    left: 2rem;
    height: 5rem;
    line-height: 5rem;
    padding: 0 2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background: var(--selection-background);
    color: var(--text-color-selected);
    border-radius: 0.5rem;
    transform: translateX(-150%);
    transition: transform 0.2s ease-in-out;

    &:focus-visible {
      transform: translateX(0);
    }
  }
</style>
