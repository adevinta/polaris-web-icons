import h from "react";
const s = h.forwardRef(({ title: c, fill: e = "currentColor", stroke: l = "none", ...t }, r) => h.createElement("svg", { ref: r, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "ProFill", ...c && { "data-title": c }, fill: e, stroke: l, ...t, dangerouslySetInnerHTML: { __html: (c === void 0 ? "" : `<title>${c}</title>`) + '<path fill-rule="evenodd" d="m20.29,10.38h-1.04v-.81c0-.28-.22-.5-.5-.5h-.34c-.28,0-.5.22-.5.5v.81h-1.04c-.28,0-.5.23-.5.5v8.9c1.88-.91,3.43-2.39,4.43-4.22v-4.69c0-.28-.23-.5-.5-.5Zm-6.21-.73h-4.17c-.23,0-.42-.19-.42-.42s.19-.42.42-.42h4.17c.23,0,.42.19.42.42s-.19.42-.42.42Zm0,2.01h-4.17c-.23,0-.42-.19-.42-.42s.19-.42.42-.42h4.17c.23,0,.42.19.42.42s-.19.42-.42.42Zm0,2.01h-4.17c-.23,0-.42-.19-.42-.42s.19-.42.42-.42h4.17c.23,0,.42.19.42.42s-.19.42-.42.42Zm0,2.01h-4.17c-.23,0-.42-.19-.42-.42s.19-.42.42-.42h4.17c.23,0,.42.19.42.42s-.19.42-.42.42Zm0,2.01h-4.17c-.23,0-.42-.19-.42-.42s.19-.42.42-.42h4.17c.23,0,.42.19.42.42s-.19.42-.42.42Zm1.1-10.47h-.84v-1.52c0-.27-.22-.5-.5-.5h-1.18v-1.51c0-.28-.22-.5-.5-.5h-.34c-.28,0-.5.22-.5.5v1.51h-1.18c-.27,0-.5.22-.5.5v1.52h-.84c-.28,0-.5.22-.5.5v12.36c1.14.46,2.39.71,3.7.71h0c1.3,0,2.54-.26,3.68-.71V7.73c0-.28-.23-.5-.5-.5Zm-8.04,3.16h-1.04v-.81c0-.28-.22-.5-.5-.5h-.34c-.28,0-.5.22-.5.5v.81h-1.04c-.28,0-.5.23-.5.5v4.69c.99,1.83,2.55,3.3,4.43,4.22v-8.9c0-.28-.23-.5-.5-.5Z"/>' } }));
s.displayName = "ProFill";
export {
  s as ProFill
};
