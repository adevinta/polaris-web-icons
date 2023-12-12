import l from "react";
const i = l.forwardRef(({ title: t, fill: o = "currentColor", stroke: e = "none", ...r }, a) => l.createElement("svg", { ref: a, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "BookmarkFill", ...t && { "data-title": t }, fill: o, stroke: e, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m4.5,5.48v15.52c0,.41.25.75.58.91.33.17.74.08,1.07-.17l5.85-4.98,5.85,4.98c.33.25.66.33,1.07.17.33-.17.58-.5.58-.91V5.48c-.08-1.91-1.65-3.48-3.46-3.48H7.88c-1.9,0-3.38,1.58-3.38,3.48Z"/>' } }));
i.displayName = "BookmarkFill";
export {
  i as BookmarkFill
};
