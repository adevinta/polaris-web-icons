import o from "react";
const i = o.forwardRef(({ title: t, fill: r = "currentColor", stroke: l = "none", ...e }, n) => o.createElement("svg", { ref: n, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "ArrowHorizontalDown", ...t && { "data-title": t }, fill: r, stroke: l, ...e, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m2.33,7.3c.43-.4,1.14-.4,1.57,0l8.1,7.48,8.1-7.48c.43-.4,1.14-.4,1.57,0,.43.4.43,1.06,0,1.47l-8.34,7.7c-.17.17-.37.3-.6.39-.23.09-.48.14-.73.14s-.5-.05-.73-.14c-.23-.09-.43-.22-.6-.39L2.33,8.77c-.43-.4-.43-1.06,0-1.47Z"/>' } }));
i.displayName = "ArrowHorizontalDown";
export {
  i as ArrowHorizontalDown
};
