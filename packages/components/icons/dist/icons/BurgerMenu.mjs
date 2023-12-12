import t from "react";
const c = t.forwardRef(({ title: e, fill: r = "currentColor", stroke: l = "none", ...o }, n) => t.createElement("svg", { ref: n, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "BurgerMenu", ...e && { "data-title": e }, fill: r, stroke: l, ...o, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m2,5.12c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Zm0,6.88c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Zm0,6.88c0-.62.45-1.12,1-1.12h18c.55,0,1,.5,1,1.12s-.45,1.12-1,1.12H3c-.55,0-1-.5-1-1.12Z"/>' } }));
c.displayName = "BurgerMenu";
export {
  c as BurgerMenu
};
