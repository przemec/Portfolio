export const updateHeaderDisplay = (scrollY: number, isDirectionDown: boolean) => {
  document.getElementsByTagName('header')[0].classList.toggle('ishidden', isDirectionDown);
  document.getElementsByTagName('header')[0].classList.toggle('isscrolled', Math.floor(scrollY - 5) > 0);
};
export const updateScrollTipDisplay = (scrollY: number) => {
  document.getElementById('scroll-tip').classList.toggle('isscrolled', scrollY > 0);
  document.getElementById('scroll-tip').classList.toggle('istop', Math.floor(scrollY) <= 0);
};
