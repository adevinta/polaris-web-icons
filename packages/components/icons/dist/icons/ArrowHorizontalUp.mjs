import l from "react";
const a = l.forwardRef(({ title: t, fill: r = "currentColor", stroke: o = "none", ...e }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "ArrowHorizontalUp", ...t && { "data-title": t }, fill: r, stroke: o, ...e, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m12,9.19l-8.1,7.51c-.43.4-1.14.4-1.57,0-.43-.4-.43-1.05,0-1.45l8.34-7.72c.17-.16.37-.29.6-.38.23-.09.48-.14.73-.14s.5.05.73.14c.23.09.43.22.6.38l8.34,7.72c.43.4.43,1.05,0,1.45-.43.4-1.14.4-1.57,0l-8.1-7.51Z"/>' } }));
a.displayName = "ArrowHorizontalUp";
export {
  a as ArrowHorizontalUp
};
