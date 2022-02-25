function getSettings(settings = {}) {
  return { scale: 1, max: 7, reverse: false, isactive: true, ...settings };
}

const TRANSITION_MS = 250;

export default function tilt(node, settingsObj) {
  let settings = getSettings(settingsObj);
  let reverse = settings.reverse ? -1 : 1;
  let { isactive } = settings;

  function onMouseMove(e) {
    if (!isactive) return;
    const { width, height, left, top } = node.getBoundingClientRect();
    let percX = (e.clientX - left) / width;
    let percY = (e.clientY - top) / height;
    const { max, scale } = settings;
    const twiceMax = max * 2;
    const tiltX = max - percX * twiceMax;
    const tiltY = percY * twiceMax - max;

    const initial_translate = new WebKitCSSMatrix(window.getComputedStyle(node).transform);
    const { m41: init_translateX, m42: init_translateY } = initial_translate;
    node.style.transform =
      `translateY(${init_translateY}px) ` +
      `translateX(${init_translateX}px) ` +
      `rotateX(${reverse * tiltY}deg) ` +
      `rotateY(${reverse * tiltX}deg) ` +
      `scale3d(${Array(3).fill(scale).join(', ')})`;
  }

  let transitionId;
  function smoothTransition() {
    clearTimeout(transitionId);
    node.style.willChange = 'transform';
    node.style.transition = `${TRANSITION_MS}ms`;
    transitionId = setTimeout(() => (node.style.transition = '0s'), TRANSITION_MS);
  }

  function onMouseLeave() {
    if (!isactive) return;
    smoothTransition();
    node.style.transform = '';
  }

  function onMouseEnter() {
    if (!isactive) return;
    smoothTransition();
    node.style.willChange = 'transform';
  }

  node.addEventListener('mousemove', onMouseMove);
  node.addEventListener('mouseleave', onMouseLeave);
  node.addEventListener('mouseenter', onMouseEnter);

  return {
    destroy() {
      node.removeEventListener('mousemove', onMouseMove);
      node.removeEventListener('mouseleave', onMouseLeave);
      node.removeEventListener('mouseleave', onMouseEnter);
    },
    update(settingsObj) {
      settings = getSettings(settingsObj);
      reverse = settings.reverse ? -1 : 1;
      if (!settings.isactive) {
        node.style.transform = '';
        node.style.transition = '';
        isactive = settings.isactive;
      }
      setTimeout(() => (isactive = settings.isactive), TRANSITION_MS + 100);
    }
  };
}
