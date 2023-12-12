import t from "react";
const n = t.forwardRef(({ title: e, fill: l = "currentColor", stroke: o = "none", ...r }, i) => t.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "RemoveOutline", ...e && { "data-title": e }, fill: l, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path d="m7.91,10.94c-.57,0-1.02.45-1.02,1s.46,1,1.02,1h8.51c.57,0,1.02-.45,1.02-1s-.46-1-1.02-1H7.91Z"/><path fill-rule="evenodd" d="m12,2C6.45,2,2,6.5,2,12s4.45,10,10,10,10-4.5,10-10S17.55,2,12,2Zm-7.95,10c0-4.44,3.59-8,7.95-8s7.95,3.56,7.95,8-3.59,8-7.95,8-7.95-3.56-7.95-8Z"/>' } }));
n.displayName = "RemoveOutline";
export {
  n as RemoveOutline
};
