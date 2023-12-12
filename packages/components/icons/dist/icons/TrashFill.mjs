import l from "react";
const s = l.forwardRef(({ title: t, fill: e = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "TrashFill", ...t && { "data-title": t }, fill: e, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m20.2,6.25h-4.1c0-1.17-.48-2.25-1.21-3-.8-.83-1.85-1.25-2.97-1.25s-2.17.42-2.97,1.25c-.8.83-1.21,1.92-1.21,3H3.72c-.4,0-.72.33-.72.75s.32.75.72.75h1.37v12.08c0,.58.24,1.17.64,1.5.32.42.88.67,1.45.67h9.64c.56,0,1.12-.25,1.45-.67.4-.42.64-1,.64-1.5V7.75h1.37c.4,0,.72-.33.72-.75-.08-.42-.4-.75-.8-.75Zm-10.12-2c.48-.5,1.21-.83,1.93-.83s1.45.33,1.93.83c.48.5.8,1.25.8,1.92h-5.46c0-.67.32-1.33.8-1.92Z"/>' } }));
s.displayName = "TrashFill";
export {
  s as TrashFill
};
