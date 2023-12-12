import e from "react";
const n = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: a = "none", ...r }, o) => e.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "MapExpand", ...t && { "data-title": t }, fill: l, stroke: a, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m15.46,4c-.55,0-1-.45-1-1s.45-1,1-1h5.54c.55,0,1,.45,1,1v5.54c0,.55-.45,1-1,1-.55,0-1-.45-1-1v-3.12l-5.22,5.22c-.39.39-1.02.39-1.41,0-.39-.39-.39-1.02,0-1.41l5.22-5.22h-3.12Zm-4.83,9.37c.39.39.39,1.02,0,1.41l-5.22,5.22h3.12c.55,0,1,.45,1,1s-.45,1-1,1H3c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71v-5.54c0-.55.45-1,1-1s1,.45,1,1v3.12l5.22-5.22c.39-.39,1.02-.39,1.41,0Z"/>' } }));
n.displayName = "MapExpand";
export {
  n as MapExpand
};
