import t from "react";
const h = t.forwardRef(({ title: e, fill: s = "currentColor", stroke: l = "none", ...c }, r) => t.createElement("svg", { ref: r, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Pieces", ...e && { "data-title": e }, fill: s, stroke: l, ...c, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m5.37,19c-.2,0-.37-.17-.37-.37V5.37c0-.2.16-.37.37-.37h13.26c.2,0,.37.16.37.37v13.26c0,.2-.16.37-.37.37H5.37Zm12.85-13.22h-8.56s0,3.11,0,3.11h1.17c.21,0,.39.17.39.39,0,.19-.14.35-.32.38h-.07s-1.17,0-1.17,0v.39c0,.21-.17.39-.39.39-.19,0-.35-.14-.38-.32v-.07s0-4.28,0-4.28h-3.11s0,7,0,7h5.06c.21,0,.39.17.39.39,0,.19-.14.35-.32.38h-.07s-5.06,0-5.06,0v4.67s3.11,0,3.11,0v-1.17c0-.21.17-.39.39-.39.19,0,.35.14.38.32v.07s0,1.17,0,1.17h8.56s0-4.67,0-4.67h-5.05c-.21,0-.39-.17-.39-.39,0-.19.14-.35.32-.38h.07s5.05,0,5.05,0v-2.33h-5.05c-.21,0-.39-.17-.39-.39,0-.19.14-.35.32-.38h.07s5.05,0,5.05,0v-3.89Z"/>' } }));
h.displayName = "Pieces";
export {
  h as Pieces
};
