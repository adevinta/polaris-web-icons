import e from "react";
const a = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: o = "none", ...r }, i) => e.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "BookmarkOutline", ...t && { "data-title": t }, fill: l, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m4.5,5.44c0-1.9,1.53-3.44,3.42-3.44h8.15c1.89,0,3.42,1.54,3.42,3.44v15.57c0,.38-.22.73-.57.89-.35.16-.75.11-1.04-.14l-5.89-5.01-5.89,5.01c-.29.25-.7.3-1.04.14-.35-.16-.57-.51-.57-.89V5.44Zm3.42-1.48c-.81,0-1.47.66-1.47,1.48v13.45l4.91-4.18c.36-.31.9-.31,1.26,0l4.91,4.18V5.44c0-.81-.66-1.48-1.47-1.48H7.92Z"/>' } }));
a.displayName = "BookmarkOutline";
export {
  a as BookmarkOutline
};
