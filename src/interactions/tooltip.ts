export function tooltip(node: HTMLElement, options) {
  let component;

  node.addEventListener('mouseover', attachTooltip);
  node.addEventListener('mouseout', removeTooltip);
  if (options.isKeyboardFocusable) {
    node.addEventListener('focus', attachTooltip);
    node.addEventListener('blur', removeTooltip);
  }

  function attachTooltip() {
    component = new options.content({
      target: node,
      props: { text: options.text }
    });
  }

  function removeTooltip() {
    component.$destroy();
  }

  return {
    destroy() {
      node.removeEventListener('mouseover', attachTooltip);
      node.removeEventListener('mouseout', removeTooltip);
      node.removeEventListener('focus', attachTooltip);
      node.removeEventListener('blur', removeTooltip);
    }
  };
}
