import t from "react";
const n = t.forwardRef(({ title: e, fill: l = "currentColor", stroke: o = "none", ...r }, i) => t.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "HomeOutline", ...e && { "data-title": e }, fill: l, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m21.71,11.31L12.68,2.29c-.38-.38-.99-.38-1.37,0L2.29,11.31c-.38.38-.38.99,0,1.37.38.38.99.38,1.37,0L12,4.35l8.34,8.34c.38.38.99.38,1.37,0,.38-.38.38-.99,0-1.37h0Zm-3.47,1.8c-.53,0-.97.43-.97.97v5.97H6.73v-5.97c0-.53-.43-.97-.97-.97s-.97.43-.97.97v6.94c0,.53.43.97.97.97h12.49c.53,0,.97-.43.97-.97v-6.94c0-.53-.43-.97-.97-.97Z"/>' } }));
n.displayName = "HomeOutline";
export {
  n as HomeOutline
};
