import l from "react";
const o = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...i }, n) => l.createElement("svg", { ref: n, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "WarningFill", ...t && { "data-title": t }, fill: e, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m12,2c-.44,0-.87.12-1.24.35-.37.23-.68.56-.88.95l-7.62,15.24h0c-.18.36-.27.77-.25,1.17.02.41.14.8.35,1.15.21.35.51.63.86.83.35.2.75.3,1.16.31h15.24c.41,0,.81-.11,1.16-.31.35-.2.65-.49.86-.83.21-.35.33-.74.35-1.15.02-.41-.07-.81-.25-1.17h0S14.13,3.31,14.13,3.31h0c-.2-.4-.5-.73-.88-.96-.37-.23-.81-.35-1.24-.35Zm0,6.23c.55,0,1,.45,1,1v4.58c0,.55-.45,1-1,1s-1-.45-1-1v-4.58c0-.55.45-1,1-1Zm1.25,8.58c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25.56-1.25,1.25-1.25,1.25.56,1.25,1.25Z"/>' } }));
o.displayName = "WarningFill";
export {
  o as WarningFill
};
