var $iA2ta$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9233cea927cb9637$export$2e2bcd8739ae039);
/* eslint-disable @typescript-eslint/no-explicit-any */ 
function $9233cea927cb9637$var$reactToText(node, resolvers) {
    if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") return node.toString();
    if (!node) return "";
    if (Array.isArray(node)) return node.map((entry)=>$9233cea927cb9637$var$reactToText(entry, resolvers)).join("");
    const [nodeType, nodeProps] = /*#__PURE__*/ (0, $iA2ta$react.isValidElement)(node) ? [
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
    return $9233cea927cb9637$var$reactToText(props.children, resolvers);
}
var $9233cea927cb9637$export$2e2bcd8739ae039 = $9233cea927cb9637$var$reactToText;


//# sourceMappingURL=index.js.map
