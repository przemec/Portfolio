import { scroll } from '$store';

export default async () => {
  let LocomotiveScroll = (await import('locomotive-scroll')).default;

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
};
