import r from "react";
const s = r.forwardRef(({ title: t, fill: e = "currentColor", stroke: o = "none", ...l }, a) => r.createElement("svg", { ref: a, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "GraphArrowDown", ...t && { "data-title": t }, fill: e, stroke: o, ...l, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m2.29,6.3c.39-.4,1.02-.4,1.41,0l4.83,4.96,2.97-3.05c.32-.32.74-.5,1.18-.5s.87.18,1.18.5h0s6.12,6.28,6.12,6.28v-3.21c0-.57.45-1.03,1-1.03s1,.46,1,1.03v5.68c0,.57-.45,1.03-1,1.03h-5.54c-.55,0-1-.46-1-1.03s.45-1.03,1-1.03h3.12l-5.89-6.05-2.97,3.05c-.32.32-.74.5-1.18.5s-.87-.18-1.18-.5h0S2.29,7.75,2.29,7.75c-.39-.4-.39-1.05,0-1.45Z"/>' } }));
s.displayName = "GraphArrowDown";
export {
  s as GraphArrowDown
};
