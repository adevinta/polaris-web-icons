import l from "react";
const s = l.forwardRef(({ title: e, fill: t = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "EyeFill", ...e && { "data-title": e }, fill: t, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m22,12c0-.39-.14-.76-.4-1.05-1.62-1.77-5.3-5.2-9.6-5.2s-7.98,3.44-9.6,5.2c-.26.29-.4.66-.4,1.05s.14.76.4,1.05c1.62,1.77,5.3,5.2,9.6,5.2s7.98-3.44,9.6-5.2c.26-.29.4-.66.4-1.05Zm-12.31,0c0-1.29,1.04-2.34,2.31-2.34s2.31,1.05,2.31,2.34-1.04,2.34-2.31,2.34-2.31-1.05-2.31-2.34Zm2.31-3.91c-2.13,0-3.85,1.75-3.85,3.91s1.73,3.91,3.85,3.91,3.85-1.75,3.85-3.91-1.73-3.91-3.85-3.91Z"/>' } }));
s.displayName = "EyeFill";
export {
  s as EyeFill
};
