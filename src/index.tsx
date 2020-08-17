/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

function reactToText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return node.toString();
  }
  if (!node) {
    return '';
  }
  if (Array.isArray(node)) {
    return node.map(reactToText).join('');
  }

  // Because ReactNode includes {} in its union we need to jump through a few hoops.
  const props: { children?: React.ReactNode } = (node as any).props ? (node as any).props : {};

  if (!props || !props.children) {
    return '';
  }

  return reactToText(props.children);
}

export default reactToText;
