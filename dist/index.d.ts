import React from 'react';
export declare type ResolverMap = Map<string | React.JSXElementConstructor<any>, (props: any) => string>;
declare function reactToText(node: React.ReactNode, resolvers?: ResolverMap): string;
export default reactToText;
