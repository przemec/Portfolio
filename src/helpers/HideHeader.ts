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
      prevScrollpos = currentScrollPos;
    };
  }
};
