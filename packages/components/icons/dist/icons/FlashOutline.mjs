import e from "react";
const a = e.forwardRef(({ title: l, fill: t = "currentColor", stroke: r = "none", ...i }, o) => e.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "FlashOutline", ...l && { "data-title": l }, fill: t, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (l === void 0 ? "" : `<title>${l}</title>`) + '<path fill-rule="evenodd" d="m12.7,2.56c.86-1.13,2.63-.4,2.48,1.02l-.54,5.12h3.48c1.15,0,1.8,1.35,1.1,2.28l-7.91,10.47c-.86,1.13-2.63.4-2.48-1.02l.54-5.12h-3.48c-1.15,0-1.8-1.35-1.1-2.28L12.7,2.56Zm.31,2.86l-5.96,7.89h2.95c.83,0,1.47.73,1.38,1.57l-.39,3.7,5.96-7.89h-2.95c-.83,0-1.47-.73-1.38-1.57l.39-3.7Z"/>' } }));
a.displayName = "FlashOutline";
export {
  a as FlashOutline
};
