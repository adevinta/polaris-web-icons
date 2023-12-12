import e from "react";
const a = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: o = "none", ...r }, s) => e.createElement("svg", { ref: s, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Booster", ...t && { "data-title": t }, fill: l, stroke: o, ...r, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path d="m8.64,11.4c0-1.89,1.51-3.42,3.36-3.42s3.36,1.53,3.36,3.42-1.51,3.42-3.36,3.42-3.36-1.53-3.36-3.42Z"/><path fill-rule="evenodd" d="m18.72,14.23v1.03l3.28,3.34-2.35.6-.59,2.4-3.36-3.42h-.92l-1.6,1.63c-.67.68-1.68.68-2.35,0l-1.6-1.63h-.93l-3.36,3.42-.59-2.4-2.35-.6,3.28-3.34v-1.03l-1.6-1.63c-.66-.65-.67-1.71-.03-2.37,0,0,.02-.02.03-.03l1.6-1.62v-2.31c0-.94.76-1.71,1.68-1.71h2.27l1.6-1.63c.67-.68,1.68-.68,2.35,0l1.6,1.63h2.27c.92,0,1.68.77,1.68,1.71v2.31l1.6,1.63c.67.6.67,1.71,0,2.39l-1.6,1.63h0Zm-11.77-2.82c0,2.82,2.27,5.13,5.04,5.13s5.04-2.31,5.04-5.13-2.27-5.13-5.04-5.13-5.04,2.31-5.04,5.13Z"/>' } }));
a.displayName = "Booster";
export {
  a as Booster
};
