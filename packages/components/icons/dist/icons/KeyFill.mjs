import l from "react";
const s = l.forwardRef(({ title: e, fill: t = "currentColor", stroke: r = "none", ...i }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "KeyFill", ...e && { "data-title": e }, fill: t, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m7.45,13.81c-1,0-1.82-.81-1.82-1.81s.82-1.8,1.82-1.8,1.82.81,1.82,1.8-.82,1.81-1.82,1.81Zm5.14-3.61c-.86-2.43-3.41-4.06-6.25-3.5-2.08.41-3.77,2.07-4.21,4.13-.74,3.49,1.93,6.59,5.33,6.59,2.37,0,4.39-1.51,5.14-3.61h3.95v1.8c0,.99.82,1.81,1.82,1.81s1.82-.81,1.82-1.81v-1.8c1,0,1.82-.81,1.82-1.8s-.82-1.8-1.82-1.8h-7.59Z"/>' } }));
s.displayName = "KeyFill";
export {
  s as KeyFill
};
