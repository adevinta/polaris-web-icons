import e from "react";
const l = e.forwardRef(({ title: t, fill: r = "currentColor", stroke: o = "none", ...c }, s) => e.createElement("svg", { ref: s, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "ComputerAccessory", ...t && { "data-title": t }, fill: r, stroke: o, ...c, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m12,19.5c-2.76,0-5-2.24-5-5v-5c0-2.76,2.24-5,5-5s5,2.24,5,5v5c0,2.76-2.24,5-5,5Zm0-14.25c-2.34,0-4.25,1.91-4.25,4.25v5c0,2.34,1.91,4.25,4.25,4.25s4.25-1.91,4.25-4.25v-5c0-2.34-1.91-4.25-4.25-4.25Z"/><path d="m12,10.88c-.21,0-.38-.17-.38-.38v-3c0-.21.17-.38.38-.38s.38.17.38.38v3c0,.21-.17.38-.38.38Z"/>' } }));
l.displayName = "ComputerAccessory";
export {
  l as ComputerAccessory
};
