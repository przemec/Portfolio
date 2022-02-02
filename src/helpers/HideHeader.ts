export default () => {
  if (window) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName('header')[0].style.top = '0';
      } else {
        document.getElementsByTagName('header')[0].style.top = '-120px';
      }
      if (currentScrollPos !== 0) {
        document.getElementsByTagName('header')[0].classList.add('hasshadow');
      } else {
        document.getElementsByTagName('header')[0].classList.remove('hasshadow');
      }
      prevScrollpos = currentScrollPos;
    };
  }
};
