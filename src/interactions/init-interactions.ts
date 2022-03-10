import { get } from 'svelte/store';
import { scroll } from '$store';
import { updateHeaderDisplay, updateScrollTipDisplay } from '$interactions/scroll-events';

export default async () => {
  let animatePageLoad = (await import('$interactions/gsap-page-load')).default;
  let initActiveSectionObserver = (await import('$interactions/active-section-observer')).default;

  get(scroll).scrollTo(0);
  updateHeaderDisplay(0, 'up');
  const onPageLoadComplete = () => {
    initActiveSectionObserver();

    get(scroll).on('scroll', (args) => {
      updateScrollTipDisplay(args.scroll.y);
      updateHeaderDisplay(args.scroll.y, args.direction);
    });

    document.body.style.overflow = 'unset';
    document.location.hash && get(scroll).scrollTo(document.querySelector(document.location.hash));
  };

  animatePageLoad(onPageLoadComplete);
};
