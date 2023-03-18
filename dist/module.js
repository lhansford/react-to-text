import {isValidElement as $4MPRY$isValidElement} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */ 
function $090815f5086f7f29$var$reactToText(node, resolvers) {
    if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") return node.toString();
    if (!node) return "";
    if (Array.isArray(node)) return node.map((entry)=>$090815f5086f7f29$var$reactToText(entry, resolvers)).join("");
    const [nodeType, nodeProps] = /*#__PURE__*/ (0, $4MPRY$isValidElement)(node) ? [
        node.type,
        node.props
    ] : [
        null,
        null
    ];
    // check if custom resolver is available
    if (nodeType && resolvers?.has(nodeType)) {
        const resolver = resolvers.get(nodeType);
        return resolver(nodeProps);
    }
    // Because ReactNode includes {} in its union we need to jump through a few hoops.
    const props = node.props ? node.props : {};
    if (!props || !props.children) return "";
    return $090815f5086f7f29$var$reactToText(props.children, resolvers);
}
var $090815f5086f7f29$export$2e2bcd8739ae039 = $090815f5086f7f29$var$reactToText;


export {$090815f5086f7f29$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
