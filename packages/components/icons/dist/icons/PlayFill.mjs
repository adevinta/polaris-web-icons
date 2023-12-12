import l from "react";
const o = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...a }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "PlayFill", ...t && { "data-title": t }, fill: e, stroke: r, ...a, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m2,11.97c0,5.52,4.48,10,10,10s10-4.48,10-10c-.53-13.26-19.48-13.26-20,0Zm7.69,3.85v-7.69l6.15,3.85-6.15,3.85Z"/>' } }));
o.displayName = "PlayFill";
export {
  o as PlayFill
};
