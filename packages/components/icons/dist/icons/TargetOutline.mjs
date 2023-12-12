import e from "react";
const a = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: r = "none", ...i }, o) => e.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "TargetOutline", ...t && { "data-title": t }, fill: l, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m12,2c.55,0,1,.45,1,1v1.84c3.19.44,5.72,2.97,6.16,6.16h1.84c.55,0,1,.45,1,1s-.45,1-1,1h-1.84c-.44,3.19-2.97,5.72-6.16,6.16v1.84c0,.55-.45,1-1,1-.55,0-1-.45-1-1v-1.84c-3.19-.44-5.72-2.97-6.16-6.16h-1.84c-.55,0-1-.45-1-1s.45-1,1-1h1.84c.44-3.19,2.97-5.72,6.16-6.16v-1.84c0-.55.45-1,1-1Zm0,4.77c-2.89,0-5.23,2.34-5.23,5.23s2.34,5.23,5.23,5.23,5.23-2.34,5.23-5.23-2.34-5.23-5.23-5.23Zm-2,5.26c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z"/>' } }));
a.displayName = "TargetOutline";
export {
  a as TargetOutline
};
