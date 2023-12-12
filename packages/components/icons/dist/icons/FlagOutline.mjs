import l from "react";
const a = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "FlagOutline", ...t && { "data-title": t }, fill: e, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m5.9,2h12.21c.38,0,.73.23.89.58.16.35.1.77-.15,1.07l-3.52,4.2,3.52,4.2c.25.3.31.71.15,1.07-.16.35-.51.58-.89.58H6.88v7.31c0,.55-.44,1-.98,1s-.98-.45-.98-1V3c0-.55.44-1,.98-1Zm.98,9.69h9.1l-2.68-3.2c-.31-.37-.31-.93,0-1.3l2.68-3.2H6.88v7.69Z"/>' } }));
a.displayName = "FlagOutline";
export {
  a as FlagOutline
};
