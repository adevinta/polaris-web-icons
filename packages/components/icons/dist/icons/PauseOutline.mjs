import t from "react";
const s = t.forwardRef(({ title: e, fill: l = "currentColor", stroke: r = "none", ...i }, o) => t.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "PauseOutline", ...e && { "data-title": e }, fill: l, stroke: r, ...i, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m12,3.95C7.55,3.95,3.95,7.55,3.95,12s3.6,8.05,8.05,8.05,8.05-3.6,8.05-8.05S16.45,3.95,12,3.95ZM2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10S2,17.52,2,12Z"/><path fill-rule="evenodd" d="m9.92,7.55c.54,0,.98.44.98.98v6.94c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-6.94c0-.54.44-.98.98-.98Zm4.17,0c.54,0,.98.44.98.98v6.94c0,.54-.44.98-.98.98s-.98-.44-.98-.98v-6.94c0-.54.44-.98.98-.98Z"/>' } }));
s.displayName = "PauseOutline";
export {
  s as PauseOutline
};
