import l from "react";
const a = l.forwardRef(({ title: e, fill: t = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "DeleteFill", ...e && { "data-title": e }, fill: t, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10S2,17.52,2,12Zm7.75-3.67c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l2.23,2.23-2.23,2.23c-.39.39-.39,1.02,0,1.41.39.39,1.02.39,1.41,0l2.23-2.23,2.23,2.23c.39.39,1.02.39,1.41,0s.39-1.02,0-1.41l-2.23-2.23,2.23-2.23c.39-.39.39-1.02,0-1.41-.39-.39-1.02-.39-1.41,0l-2.23,2.23-2.23-2.23Z"/>' } }));
a.displayName = "DeleteFill";
export {
  a as DeleteFill
};
