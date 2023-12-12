import t from "react";
const c = t.forwardRef(({ title: e, fill: v = "currentColor", stroke: r = "none", ...s }, l) => t.createElement("svg", { ref: l, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Years", ...e && { "data-title": e }, fill: v, stroke: r, ...s, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m15.5,4.5c.19,0,.35.13.38.31v.07s0,.38,0,.38h2.74c.18,0,.33.13.36.31v.07s0,13.5,0,13.5c0,.21-.16.38-.37.38H5.37c-.2,0-.37-.17-.37-.38V5.62c0-.21.16-.38.37-.38h2.74v-.38c0-.21.17-.38.39-.38.19,0,.35.13.38.31v.07s0,.38,0,.38h6.22v-.38c0-.21.17-.38.39-.38Zm2.72,4.5H5.78v9.75h12.45v-9.75Zm-1.2,3.75c.23,0,.42.17.42.38v4.5c0,.21-.19.38-.42.38H6.97c-.23,0-.42-.17-.42-.38v-4.5c0-.21.19-.38.42-.38h10.05Zm-.36.75H7.33v3.75h9.33v-3.75Zm-8.56-7.5h-2.33v2.25s12.44,0,12.44,0v-2.25s-2.33,0-2.33,0v1.12c0,.21-.17.38-.39.38-.19,0-.35-.13-.38-.31v-.07s0-1.12,0-1.12h-6.22v1.12c0,.21-.17.38-.39.38-.19,0-.35-.13-.38-.31v-.07s0-1.12,0-1.12Z"/>' } }));
c.displayName = "Years";
export {
  c as Years
};
