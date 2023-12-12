import l from "react";
const o = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...d }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "AddFill", ...t && { "data-title": t }, fill: e, stroke: r, ...d, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m22,12c0,5.52-4.48,10-10,10S2,17.52,2,12,6.48,2,12,2s10,4.48,10,10Zm-9-4.62c0-.55-.45-1-1-1s-1,.45-1,1v3.62h-3.62c-.55,0-1,.45-1,1s.45,1,1,1h3.62v3.62c0,.55.45,1,1,1s1-.45,1-1v-3.62h3.62c.55,0,1-.45,1-1s-.45-1-1-1h-3.62v-3.62Z"/>' } }));
o.displayName = "AddFill";
export {
  o as AddFill
};
