import gsap from 'gsap';

export default () => {
  const pageload = gsap.timeline({ defaults: { duration: 0.4 } });
  pageload
    .from('#main h2', { opacity: 0, scale: 0 })
    .from('#main h1', { opacity: 0, scale: 0, delay: 0.2 })
    .from('#main p', { opacity: 0, delay: 0.4 })
    .from('#logo', { opacity: 0, delay: 0.4 })
    .from('header .tab', { opacity: 0, y: '-100%', stagger: 0.1 }, '<')
    .from('#vertical_links a', { opacity: 0, x: '100%', stagger: 0.1 }, '<0.4')
    .from('#scroll-tip', { opacity: 0, delay: 0.5 })
};
