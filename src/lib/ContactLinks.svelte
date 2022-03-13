<script>
  let active_tabs = [false, false, false, false];
  let set_active = (num) => {
    active_tabs[num] = true;
  };
  let set_inactive = (num) => {
    active_tabs[num] = false;
  };
</script>

<ul id="contact_links">
  <a
    id="link-gh"
    href="https://github.com/przemec/"
    target="_blank"
    on:mouseenter={() => set_active(0)}
    on:mouseleave={() => set_inactive(0)}
    on:focusin={() => set_active(0)}
    on:focusout={() => set_inactive(0)}
    class:semihoveredbottom={active_tabs[1]}
  >
    <div />
    <svg viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-contact-gh" clipPathUnits="objectBoundingBox">
          <path
            fill="currentColor"
            d="M0.37,0.87a0.541,0.541,0,0,1,0,.1A0.031,0.031,0,0,1,.36.99,0.088,0.088,0,0,1,.33,1,0.5,0.5,0,0,1,.08.78,0.525,0.525,0,0,1,0,.49,0.524,0.524,0,0,1,.5,0,0.5,0.5,0,0,1,1,.461,0.494,0.494,0,0,1,.65,1,0.021,0.021,0,0,1,.63.98,0.785,0.785,0,0,1,.62.81,0.144,0.144,0,0,0,.59.72,0.23,0.23,0,0,0,.77.35,0.181,0.181,0,0,0,.78.28,0.239,0.239,0,0,0,.76.21,0.162,0.162,0,0,0,.64.26H0.37C0.306,0.209.236,0.2,0.233,0.222A0.182,0.182,0,0,0,.24.34,0.382,0.382,0,0,0,.192.41,0.311,0.311,0,0,0,.22.62,0.189,0.189,0,0,0,.3.69,0.414,0.414,0,0,0,.4.72,0.216,0.216,0,0,0,.39.76c0,0.048-.014.053-0.11,0.04A0.187,0.187,0,0,0,.15.7s-0.019.012,0,.032A1.014,1.014,0,0,1,.25.84,0.179,0.179,0,0,0,.37.87Z"
          />
        </clipPath>
      </defs>
    </svg>
  </a>
  <a
    id="link-li"
    href="https://www.linkedin.com/in/pszczepaniak0/"
    target="_blank"
    on:mouseenter={() => set_active(1)}
    on:mouseleave={() => set_inactive(1)}
    on:focusin={() => set_active(1)}
    on:focusout={() => set_inactive(1)}
    class:semihoveredtop={active_tabs[0]}
    class:semihoveredbottom={active_tabs[2]}
  >
    <div />
    <svg viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-contact-li" clipPathUnits="objectBoundingBox">
          <path
            fill="currentColor"
            d="M0.17,0H0.85A0.515,0.515,0,0,1,.91.01,0.136,0.136,0,0,1,.96.03,0.1,0.1,0,0,1,.99.07,0.259,0.259,0,0,1,1,.14V0.82A0.35,0.35,0,0,1,.99.9,0.212,0.212,0,0,1,.96.96,0.111,0.111,0,0,1,.91.99,0.263,0.263,0,0,1,.83,1H0.13A0.143,0.143,0,0,1,.08.99,0.128,0.128,0,0,1,.04.96,0.245,0.245,0,0,1,.017.91C0.008,0.885,0,.86,0,0.86V0.14A0.139,0.139,0,0,1,.01.08,0.139,0.139,0,0,1,.04.04,0.2,0.2,0,0,1,.1.01,0.3,0.3,0,0,1,.17,0ZM0.18,0.16A0.1,0.1,0,1,0,.31.31C0.414,0.225.26,0.095,0.18,0.16Zm0.47,0.2A0.1,0.1,0,0,0,.58.38,0.1,0.1,0,0,0,.55.42,0.1,0.1,0,0,0,.39.4V0.87H0.55V0.72s0-.1,0-0.16A0.1,0.1,0,0,1,.59.51,0.1,0.1,0,0,1,.67.5,0.075,0.075,0,0,1,.72.59V0.87H0.88c0-.036,0-0.228,0-0.29A0.285,0.285,0,0,0,.87.49,0.392,0.392,0,0,0,.83.41,0.249,0.249,0,0,0,.65.36Zm-0.48.01v0.5H0.31c0-.026,0-0.5,0-0.5H0.17Z"
          />
        </clipPath>
      </defs>
    </svg>
  </a>
  <a
    id="link-bd"
    href="https://betterdiscord.app/developer/tomec"
    on:mouseenter={() => set_active(2)}
    on:mouseleave={() => set_inactive(2)}
    on:focusin={() => set_active(2)}
    on:focusout={() => set_inactive(2)}
    class:semihoveredtop={active_tabs[1]}
    class:semihoveredbottom={active_tabs[3]}
  >
    <div />
    <svg viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-contact-bd" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0C0.372-.006.689-0.042,0.74,0.28A1.43,1.43,0,0,1,.68.51C0.692,0.547.72,0.583,0.73,0.62A0.285,0.285,0,0,1,.72.79C0.635,1.042.335,1,0,1V0.8c0.143,0,.3,0,0.43-0.01A0.188,0.188,0,0,0,.49.68C0.466,0.652.445,0.627,0.42,0.6H0.27V0.41A0.562,0.562,0,0,0,.46.38,0.469,0.469,0,0,0,.49.29,0.2,0.2,0,0,1,.47.25,0.25,0.25,0,0,1,.42.21H0.22V0.64H0.21A2.593,2.593,0,0,1,0,.45V0ZM0.64,0C1.1,0,1.009.39,1,.83H0.99A0.348,0.348,0,0,1,.65,1V0.99H0.66A0.463,0.463,0,0,0,.78.84,1.766,1.766,0,0,0,.79.35,0.621,0.621,0,0,0,.78.16,0.466,0.466,0,0,0,.64,0Z"
          />
        </clipPath>
      </defs>
    </svg>
  </a>
</ul>

<style lang="scss">
  ul {
    position: absolute;
    bottom: 0.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(100%);
    width: 5.5rem;
    height: 5.5rem;
    color: var(--text-color);
    transition: color 0.2s, transform 0.2s;
    &:nth-of-type(2) {
      margin: 0 2rem;
    }

    div {
      position: relative;
      background: var(--text-color);
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    @media (min-width: 800px) {
      &:nth-of-type(2) {
        margin: 0 4rem;
      }
      div {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
    &:hover div,
    &:focus-visible div {
      background: var(--primary);
      transform: translateY(-1.4rem);
    }
    &.semihoveredtop div,
    &.semihoveredbottom div {
      background: var(--text-color);
      transform: translateY(-0.4rem);
    }
    div::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      background: linear-gradient(-110deg, var(--primary) 0%, var(--text-color) 60%);
    }
    div::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      background: linear-gradient(-70deg, var(--text-color) 40%, var(--primary));
    }
    &.semihoveredbottom div::before,
    &.semihoveredtop div::after {
      opacity: 1;
    }
    &#link-gh div,
    &#link-gh div::before,
    &#link-gh div::after {
      clip-path: url(#clip-contact-gh);
    }
    &#link-li div,
    &#link-li div::before,
    &#link-li div::after {
      clip-path: url(#clip-contact-li);
    }
    &#link-bd div,
    &#link-bd div::before,
    &#link-bd div::after {
      clip-path: url(#clip-contact-bd);
    }
    svg {
      width: 0;
      height: 0;
    }
  }
</style>
