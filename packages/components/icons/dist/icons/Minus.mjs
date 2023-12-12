import e from "react";
const n = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: r = "none", ...i }, o) => e.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Minus", ...t && { "data-title": t }, fill: l, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m2,12c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Z"/>' } }));
n.displayName = "Minus";
export {
  n as Minus
};
