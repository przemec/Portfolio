import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { updateHeaderDisplay, updateScrollTipDisplay, updateActiveSection } from '$interactions/scroll-events';

export default async () => {
  window.scrollTo(0, 0);
  let animatePageLoad = (await import('$interactions/gsap-page-load')).default;
  let initScrollTriggers = (await import('$interactions/gsap-scroll-triggers')).default;

  gsap.registerPlugin(ScrollTrigger);
  initScrollTriggers();

  updateHeaderDisplay(0, false);

  const onPageLoadComplete = () => {

    let lastScrollTop: number;

    document.addEventListener('scroll', () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      updateActiveSection();
      updateScrollTipDisplay(currentScrollTop);
      updateHeaderDisplay(currentScrollTop, currentScrollTop > lastScrollTop);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });

    document.body.style.overflow = 'unset';
    document.location.hash &&
      document.querySelector(document.location.hash).scrollIntoView({ behavior: 'smooth' });
  };

  animatePageLoad(onPageLoadComplete);
};
