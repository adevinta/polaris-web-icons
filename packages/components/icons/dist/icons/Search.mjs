import t from "react";
const i = t.forwardRef(({ title: e, fill: l = "currentColor", stroke: r = "none", ...o }, a) => t.createElement("svg", { ref: a, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Search", ...e && { "data-title": e }, fill: l, stroke: r, ...o, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m10.5,3.95c-3.62,0-6.55,2.93-6.55,6.55s2.93,6.55,6.55,6.55,6.55-2.93,6.55-6.55-2.93-6.55-6.55-6.55ZM2,10.5C2,5.81,5.81,2,10.5,2s8.5,3.81,8.5,8.5-3.81,8.5-8.5,8.5S2,15.2,2,10.5Z"/><path fill-rule="evenodd" d="m15.13,15.13c.38-.38,1-.38,1.38,0l5.21,5.21c.38.38.38,1,0,1.38-.38.38-1,.38-1.38,0l-5.21-5.21c-.38-.38-.38-1,0-1.38Z"/>' } }));
i.displayName = "Search";
export {
  i as Search
};
