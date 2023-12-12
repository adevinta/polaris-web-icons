import t from "react";
const a = t.forwardRef(({ title: e, fill: r = "currentColor", stroke: l = "none", ...o }, v) => t.createElement("svg", { ref: v, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Wardrobe", ...e && { "data-title": e }, fill: r, stroke: l, ...o, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m17.62,4.5c.21,0,.38.17.38.38v12.52s0,.01,0,.02,0,.01,0,.02v1.7c0,.21-.17.38-.38.38H6.38c-.21,0-.38-.17-.38-.38v-1.7s0-.01,0-.02v-.02s0-12.52,0-12.52c0-.21.17-.38.38-.38h11.23Zm-.38,13.3H6.77v.95h10.46v-.95Zm0-12.55h-4.85v11.77h4.85V5.25Zm-5.62,0h-4.85v11.77h4.85V5.25Zm1.69,4.93c.21,0,.38.17.38.38v1.73c0,.21-.17.38-.38.38s-.38-.17-.38-.38v-1.73c0-.21.17-.38.38-.38Zm-2.61,0c.21,0,.38.17.38.38v1.73c0,.21-.17.38-.38.38s-.38-.17-.38-.38v-1.73c0-.21.17-.38.38-.38Z"/>' } }));
a.displayName = "Wardrobe";
export {
  a as Wardrobe
};
