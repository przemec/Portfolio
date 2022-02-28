export function tooltip(node: HTMLElement, options) {
  let component;

  node.addEventListener('mouseover', attachTooltip);
  node.addEventListener('mouseout', removeTooltip);

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
    }
  };
}
