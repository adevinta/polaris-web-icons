import l from "react";
const o = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...a }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "CardFill", ...t && { "data-title": t }, fill: e, stroke: r, ...a, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m19.76,4.5H4.16c-1.24,0-2.16.91-2.16,2.15v2.82h20v-2.82c-.08-1.24-1-2.15-2.24-2.15ZM2,10.96v6.38c0,1.16,1,2.15,2.16,2.15h15.68c1.16,0,2.16-.99,2.16-2.15v-6.38H2Zm11.7,3.73h4.15c.42,0,.75.33.75.75s-.33.75-.75.75h-4.15c-.41,0-.75-.33-.75-.75s.33-.75.75-.75Z"/>' } }));
o.displayName = "CardFill";
export {
  o as CardFill
};
