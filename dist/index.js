'use strict';

function reactToText(node) {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return node.toString();
  }

  if (!node) {
    return '';
  }

  if (Array.isArray(node)) {
    return node.map(reactToText).join('');
  } // Because ReactNode includes {} in its union we need to jump through a few hoops.


  const props = node.props ? node.props : {};

  if (!props || !props.children) {
    return '';
  }

  return reactToText(props.children);
}

module.exports = reactToText;
