/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { isValidElement } from 'react';

export type ResolverMap = Map<string | React.JSXElementConstructor<any>, (props: any) => string>;

function reactToText(node: React.ReactNode, resolvers?: ResolverMap): string {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return node.toString();
  }
  if (!node) {
    return '';
  }
  if (Array.isArray(node)) {
    return node.map((entry) => reactToText(entry, resolvers)).join('');
  }

  const [nodeType, nodeProps] = isValidElement(node) ? [node.type, node.props] : [null, null];
  // check if custom resolver is available
  if (nodeType && resolvers?.has(nodeType)) {
    const resolver = resolvers.get(nodeType)!;
    return resolver(nodeProps);
  }

  // Because ReactNode includes {} in its union we need to jump through a few hoops.
  const props: { children?: React.ReactNode } = (node as any).props ? (node as any).props : {};

  if (!props || !props.children) {
    return '';
  }

  return reactToText(props.children, resolvers);
}

export default reactToText;
