import l from "react";
const s = l.forwardRef(({ title: e, fill: t = "currentColor", stroke: o = "none", ...r }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Close", ...e && { "data-title": e }, fill: t, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m21.6,19.67l-7.68-7.68,7.57-7.59c.53-.53.53-1.4,0-1.93-.53-.53-1.4-.53-1.93,0l-7.57,7.58L4.33,2.4c-.53-.53-1.4-.53-1.93,0-.53.53-.53,1.4,0,1.93l7.66,7.66-7.66,7.65c-.53.53-.53,1.4,0,1.93.53.53,1.4.53,1.93,0l7.66-7.66,7.68,7.68c.53.53,1.4.53,1.93,0,.53-.53.53-1.4,0-1.93h0Z"/>' } }));
s.displayName = "Close";
export {
  s as Close
};
