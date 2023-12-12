import l from "react";
const n = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: o = "none", ...r }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "InfoFill", ...t && { "data-title": t }, fill: e, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m2,12C2,6.48,6.48,2,12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12Zm11.02,4.52c0,.58-.47,1.05-1.05,1.05s-1.05-.47-1.05-1.05v-4.82c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v4.82Zm.4-8.36c0,.8-.65,1.45-1.45,1.45s-1.45-.65-1.45-1.45.65-1.45,1.45-1.45,1.45.65,1.45,1.45Z"/>' } }));
n.displayName = "InfoFill";
export {
  n as InfoFill
};
