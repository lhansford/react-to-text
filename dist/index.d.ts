import React from "react";
export type ResolverMap = Map<string | React.JSXElementConstructor<any>, (props: any) => string>;
export default function reactToText(node: React.ReactNode | object, resolvers?: ResolverMap): string;
export default reactToText;

//# sourceMappingURL=index.d.ts.map
