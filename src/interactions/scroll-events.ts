export const updateHeaderDisplay = (scrollY: number, direction: string) => {
  document.getElementsByTagName('header')[0].classList.toggle('ishidden', direction === 'down');
  document.getElementsByTagName('header')[0].classList.toggle('isscrolled', Math.floor(scrollY - 5) > 0);
};
export const updateScrollTipDisplay = (scrollY: number) => {
  document.getElementById('scroll-tip').classList.toggle('isscrolled', Math.floor(scrollY - 5) > 0);
};
