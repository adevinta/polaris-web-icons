import e from "react";
const i = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: r = "none", ...o }, s) => e.createElement("svg", { ref: s, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Plus", ...t && { "data-title": t }, fill: l, stroke: r, ...o, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m12,2c.55,0,1,.45,1,1v7.94h8c.55,0,1,.45,1,1s-.45,1-1,1h-8v8.06c0,.55-.45,1-1,1s-1-.45-1-1v-8.06H3c-.55,0-1-.45-1-1s.45-1,1-1h8V3c0-.55.45-1,1-1Z"/>' } }));
i.displayName = "Plus";
export {
  i as Plus
};
