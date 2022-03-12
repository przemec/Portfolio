import { updateHeaderDisplay, updateScrollTipDisplay } from '$interactions/scroll-events';

export default async () => {
  let animatePageLoad = (await import('$interactions/gsap-page-load')).default;
  let initActiveSectionObserver = (await import('$interactions/active-section-observer')).default;

  window.scrollTo(0,0);
  updateHeaderDisplay(0, false);
  const onPageLoadComplete = () => {
    initActiveSectionObserver();

    let lastScrollTop: number;

    document.addEventListener('scroll', () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
