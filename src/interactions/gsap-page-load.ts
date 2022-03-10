import gsap from 'gsap';

export default (onComplete) => {
  const page_load_timeline = gsap.timeline({ defaults: { duration: 0.4 } });
  const intro_circle_size = { size_color: 0, size_grey: 0 };

  const { matches: ismobile } = window.matchMedia('(max-width: 800px)');

  page_load_timeline
    .to(intro_circle_size, {
      size_color: 80,
      duration: 2,
      delay: 1,
      onUpdate: () => {
        let { size_color } = intro_circle_size;
        let color = document.body.querySelector('#intro_background_color') as HTMLElement;
        color.style.clipPath = `circle(${size_color}% at 50% 50%)`;
      }
    })
    .to(
      intro_circle_size,
      {
        size_grey: 80,
        duration: 2,
        onUpdate: () => {
          let { size_grey } = intro_circle_size;
          let color = document.body.querySelector('#intro_background_grey') as HTMLElement;
          color.style.clipPath = `circle(${size_grey}% at 50% 50%)`;
        }
      },
      '<1'
    )
    .to('#intro_wrapper', { display: 'none', duration: 0 })
    .from('#main h2', { opacity: 0, scale: 0 })
    .from('#main h1', { opacity: 0, scale: 0, delay: 0.2 })
    .from('#main p', { opacity: 0, delay: 0.4 })
    .from('#logo', { opacity: 0, marginTop: '-5rem', delay: 0.4, onComplete });

  if (ismobile)
    page_load_timeline
      .from('#mobile_nav .hamburger', { opacity: 0, marginTop: '-5rem', stagger: 0.1 }, '<')
      .from('#scroll-tip', { opacity: 0, delay: 0.5 });
  else
    page_load_timeline
      .from('header .tab', { opacity: 0, marginTop: '-10rem', stagger: 0.1 }, '<')
      .from('#vertical_links a', { opacity: 0, x: '100%', stagger: 0.1 }, '<0.4')
      .from('#scroll-tip', { opacity: 0, delay: 0.5 });
};
