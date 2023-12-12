import e from "react";
const o = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: d = "none", ...r }, i) => e.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "AddOutline", ...t && { "data-title": t }, fill: l, stroke: d, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m12.07,7c.55,0,1,.45,1,1v3.07h3.07c.55,0,1,.45,1,1s-.45,1-1,1h-3.07v3.07c0,.55-.45,1-1,1s-1-.45-1-1v-3.07h-3.07c-.55,0-1-.45-1-1s.45-1,1-1h3.07v-3.07c0-.55.45-1,1-1Z"/><path fill-rule="evenodd" d="m12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2ZM4,12c0-4.42,3.58-8,8-8s8,3.58,8,8-3.58,8-8,8-8-3.58-8-8Z"/>' } }));
o.displayName = "AddOutline";
export {
  o as AddOutline
};
