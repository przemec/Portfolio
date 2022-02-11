export default () => {
  if (window) {
    let prevScrollpos = window.pageYOffset;
    const onwindowscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        document.getElementsByTagName('header')[0].classList.toggle('ishidden', false);
      } else {
        document.getElementsByTagName('header')[0].classList.toggle('ishidden', true);
      }
      if (currentScrollPos !== 0) {
        document.getElementById('scroll-tip').classList.toggle('scrolled', true);
        document.getElementsByTagName('header')[0].classList.toggle('isscrolled', true);
      } else {
        document.getElementById('scroll-tip').classList.toggle('scrolled', false);
        document.getElementsByTagName('header')[0].classList.toggle('isscrolled', false);
      }
      prevScrollpos = currentScrollPos;
    };
    onwindowscroll();
    window.onscroll = () => onwindowscroll();
  }
};
