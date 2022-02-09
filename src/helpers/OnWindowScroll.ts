export default () => {
  if (window) {
    let prevScrollpos = window.pageYOffset;
    const onwindowscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName('header')[0].style.top = '0';
      } else {
        document.getElementsByTagName('header')[0].style.top = '-120px';
      }
      if (currentScrollPos !== 0) {
        document.getElementById('scroll-tip').classList.toggle('scrolled', true);
        document.getElementsByTagName('header')[0].classList.toggle('hasshadow', true);
      } else {
        document.getElementById('scroll-tip').classList.toggle('scrolled', false);
        document.getElementsByTagName('header')[0].classList.toggle('hasshadow', false);
      }
      prevScrollpos = currentScrollPos;
    };
    onwindowscroll();
    window.onscroll = () => onwindowscroll();
  }
};
