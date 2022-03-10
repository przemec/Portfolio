import { get } from 'svelte/store';
import { scroll } from '$store';
import { updateHeaderDisplay, updateScrollTipDisplay } from '$interactions/scroll-events';

export default async () => {
  let LocomotiveScroll = (await import('locomotive-scroll')).default;
  let animatePageLoad = (await import('$interactions/gsap-page-load')).default;
  let initActiveSectionObserver = (await import('$interactions/active-section-observer')).default;

  scroll.set(
    new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true,
      mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true
      },
      tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true
      }
    })
  );
  get(scroll).scrollTo(0);
  const onPageLoadComplete = () => {
    initActiveSectionObserver();

    updateHeaderDisplay(0, 'up');
    get(scroll).on('scroll', (args) => {
      updateScrollTipDisplay(args.scroll.y);
      updateHeaderDisplay(args.scroll.y, args.direction);
    });

    document.location.hash && get(scroll).scrollTo(document.querySelector(document.location.hash));
  };

  animatePageLoad(onPageLoadComplete);
};
