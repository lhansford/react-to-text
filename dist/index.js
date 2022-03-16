'use strict';

var react = require('react');

/* eslint-disable @typescript-eslint/no-explicit-any */

function reactToText(node, resolvers) {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return node.toString();
  }

  if (!node) {
    return '';
  }

  if (Array.isArray(node)) {
    return node.map(entry => reactToText(entry, resolvers)).join('');
  }

  const [nodeType, nodeProps] = /*#__PURE__*/react.isValidElement(node) ? [node.type, node.props] : [null, null]; // check if custom resolver is available

  if (nodeType && (resolvers === null || resolvers === void 0 ? void 0 : resolvers.has(nodeType))) {
    const resolver = resolvers.get(nodeType);
    return resolver(nodeProps);
  } // Because ReactNode includes {} in its union we need to jump through a few hoops.


  const props = node.props ? node.props : {};

  if (!props || !props.children) {
    return '';
  }

  return reactToText(props.children, resolvers);
}

module.exports = reactToText;
