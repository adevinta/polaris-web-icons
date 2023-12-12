import l from "react";
const o = l.forwardRef(({ title: e, fill: t = "currentColor", stroke: r = "none", ...a }, i) => l.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "CameraFill", ...e && { "data-title": e }, fill: t, stroke: r, ...a, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m9.18,4c-.26,0-.5.12-.66.33l-1.87,2.53h-2.41c-.59,0-1.16.24-1.58.66-.42.43-.65,1-.65,1.6v8.6c0,.6.24,1.18.65,1.6.42.43.99.66,1.58.66h15.53c.59,0,1.16-.24,1.58-.66.42-.43.65-1,.65-1.6v-8.6c0-.6-.24-1.18-.65-1.6-.42-.43-.99-.66-1.58-.66h-2.41l-1.87-2.53c-.16-.21-.4-.33-.66-.33h-5.65Zm2.82,5.04c-2.21,0-4,1.82-4,4.06s1.79,4.06,4,4.06,4-1.82,4-4.06-1.79-4.06-4-4.06Z"/>' } }));
o.displayName = "CameraFill";
export {
  o as CameraFill
};
