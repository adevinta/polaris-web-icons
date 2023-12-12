import t from "react";
const i = t.forwardRef(({ title: e, fill: r = "currentColor", stroke: l = "none", ...o }, a) => t.createElement("svg", { ref: a, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "MoreMenuVertical", ...e && { "data-title": e }, fill: r, stroke: l, ...o, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path d="m12,6.62c1.24,0,2.25-1.03,2.25-2.31s-1.01-2.31-2.25-2.31-2.25,1.03-2.25,2.31,1.01,2.31,2.25,2.31Zm0,7.69c1.24,0,2.25-1.03,2.25-2.31s-1.01-2.31-2.25-2.31-2.25,1.03-2.25,2.31,1.01,2.31,2.25,2.31Zm0,7.69c1.24,0,2.25-1.03,2.25-2.31s-1.01-2.31-2.25-2.31-2.25,1.03-2.25,2.31,1.01,2.31,2.25,2.31Z"/>' } }));
i.displayName = "MoreMenuVertical";
export {
  i as MoreMenuVertical
};
