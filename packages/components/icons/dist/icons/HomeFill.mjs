import l from "react";
const a = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: o = "none", ...r }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "HomeFill", ...t && { "data-title": t }, fill: e, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m21.74,11.5L12.49,2.25c-.33-.33-.75-.33-1.08,0L2.25,11.5c-.33.33-.33.75,0,1.08.33.33.75.33,1.08,0l1.33-1.42v10c0,.33.25.67.58.75.08,0,.25.08.33.08h12.83c.08,0,.25,0,.33-.08.42,0,.75-.33.75-.75v-9.92l1.25,1.25c.33.33.75.33,1.08,0,.25-.25.25-.75-.08-1Z"/>' } }));
a.displayName = "HomeFill";
export {
  a as HomeFill
};
