import e from "react";
const a = e.forwardRef(({ title: t, fill: o = "currentColor", stroke: r = "none", ...l }, n) => e.createElement("svg", { ref: n, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "MoreMenuHorizontal", ...t && { "data-title": t }, fill: o, stroke: r, ...l, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m19.69,14.25c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Zm-7.69,0c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Zm-7.69,0c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Z"/>' } }));
a.displayName = "MoreMenuHorizontal";
export {
  a as MoreMenuHorizontal
};
