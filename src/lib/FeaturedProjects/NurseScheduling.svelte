<script lang="ts">
  import './ProjectStyles.scss';
  import Tooltip from '../Tooltip.svelte';
  import { tooltip } from '$interactions/tooltip';
</script>

<div class="project-wrapper">
  <h2>Nurse Scheduling App</h2>
  <p>
    The app, which is currently helping workers at IOP in Otwock with setting and editing their time
    tables, has been done by AGH's science club Glider. I've been working with Glider for 2 months
    in 2021: for this time I've been mainly coding new React components and refactoring old ones. My
    biggest task was migrating whole app to styled-components. I've also written my first test using
    Cypress.
  </p>
  <div class="horizontal-section-wrapper">
    <div class="horizontal-section">
      <h3>Technologies I've used</h3>
      <ul>
        <li use:tooltip={{ content: Tooltip, text: 'React' }}>
          <svg viewBox="0 0 128 128">
            <g fill="currentColor">
              <circle cx="64" cy="64" r="11.4" />
              <path
                d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
              />
            </g>
          </svg>
        </li>
        <li use:tooltip={{ content: Tooltip, text: 'MaterialUI' }}>
          <svg viewBox="0 0 128 128">
            <path
              fill="currentColor"
              d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
            /><path
              fill="currentColor"
              d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
            />
          </svg>
        </li>
        <li use:tooltip={{ content: Tooltip, text: 'Cypress' }}>
          <svg viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532H6.37zm12 2.705c-.436 1.353-1.091 2.357-2.008 3.098-.916.743-2.138 1.135-3.665 1.266l-.305-2.05c1.003-.132 1.745-.35 2.225-.7.174-.13.524-.523.524-.523L11.519 6.764h3.01l2.095 8.683 2.226-8.683h2.923L18.37 17.28z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div class="horizontal-section-wrapper">
      <a
        href="https://github.com/aI-lab-glider/nurse-scheduling-frontend/commits/next?author=przemec"
        target="_blank"
        class="horizontal-section"
      >
        <h3>Tasks I've done</h3>
        <svg viewBox="0 0 1.1 1.1" class="align-self-start">
          <path
            fill="currentColor"
            d="M0.37,0.87a0.541,0.541,0,0,1,0,.1A0.031,0.031,0,0,1,.36.99,0.088,0.088,0,0,1,.33,1,0.5,0.5,0,0,1,.08.78,0.525,0.525,0,0,1,0,.49,0.524,0.524,0,0,1,.5,0,0.5,0.5,0,0,1,1,.461,0.494,0.494,0,0,1,.65,1,0.021,0.021,0,0,1,.63.98,0.785,0.785,0,0,1,.62.81,0.144,0.144,0,0,0,.59.72,0.23,0.23,0,0,0,.77.35,0.181,0.181,0,0,0,.78.28,0.239,0.239,0,0,0,.76.21,0.162,0.162,0,0,0,.64.26H0.37C0.306,0.209.236,0.2,0.233,0.222A0.182,0.182,0,0,0,.24.34,0.382,0.382,0,0,0,.192.41,0.311,0.311,0,0,0,.22.62,0.189,0.189,0,0,0,.3.69,0.414,0.414,0,0,0,.4.72,0.216,0.216,0,0,0,.39.76c0,0.048-.014.053-0.11,0.04A0.187,0.187,0,0,0,.15.7s-0.019.012,0,.032A1.014,1.014,0,0,1,.25.84,0.179,0.179,0,0,0,.37.87Z"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="horizontal-section-wrapper">
    <a href="https://adopcja-glider.netlify.app/" target="_blank" class="horizontal-section">
      <h3>Website</h3>
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
        />
      </svg>
    </a>
  </div>
  <div class="horizontal-section-wrapper">
    <a
      href="https://drive.google.com/uc?export=download&id=132C0ep2uefQxD14WfLlYqVzVZex6YxUt"
      target="_blank"
      class="horizontal-section"
    >
      <h3>File needed to use app</h3>
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
      </svg>
    </a>
  </div>
  <a href="https://adopcja-glider.netlify.app/" target="_blank" class="project-preview">
    <img src="./preview-scheduling.png" alt="Nurse Scheduling Project Preview" loading="lazy" />
  </a>
</div>
