import e from "react";
const a = e.forwardRef(({ title: t, fill: r = "currentColor", stroke: l = "none", ...i }, o) => e.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "ArrowVerticalRight", ...t && { "data-title": t }, fill: r, stroke: l, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m7.3,2.28c-.38.38-.4,1.02-.03,1.41l7.69,8.31-7.69,8.31c-.37.4-.36,1.03.03,1.41.38.38.99.37,1.36-.03l7.87-8.51c.15-.16.27-.34.35-.54.08-.21.12-.43.12-.65s-.04-.44-.12-.65c-.08-.2-.2-.38-.35-.54L8.66,2.31c-.37-.4-.98-.41-1.36-.03Z"/>' } }));
a.displayName = "ArrowVerticalRight";
export {
  a as ArrowVerticalRight
};
