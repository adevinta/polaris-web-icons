import l from "react";
const s = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "AlertFill", ...t && { "data-title": t }, fill: e, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10S2,17.52,2,12Zm8.51,4.12c0-.8.65-1.45,1.45-1.45s1.45.65,1.45,1.45-.65,1.45-1.45,1.45-1.45-.65-1.45-1.45Zm.4-8.36c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v4.82c0,.58-.47,1.05-1.05,1.05s-1.05-.47-1.05-1.05v-4.82Z"/>' } }));
s.displayName = "AlertFill";
export {
  s as AlertFill
};
