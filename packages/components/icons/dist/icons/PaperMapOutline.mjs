import e from "react";
const o = e.forwardRef(({ title: l, fill: t = "currentColor", stroke: r = "none", ...a }, i) => e.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "PaperMapOutline", ...l && { "data-title": l }, fill: t, stroke: r, ...a, dangerouslySetInnerHTML: { __html: (l === void 0 ? "" : `<title>${l}</title>`) + '<path fill-rule="evenodd" d="m21.54,4.2c.29.2.46.52.46.86v12.12c0,.46-.31.87-.76,1.01l-5.59,1.76c-.21.07-.43.07-.64.01l-6.29-1.67-5.27,1.66c-.34.11-.71.05-.99-.15-.29-.2-.46-.52-.46-.86V6.82c0-.46.31-.87.76-1.01l5.59-1.76c.21-.06.43-.07.64-.01l6.29,1.67,5.27-1.66c.34-.11.71-.05.99.15Zm-7.34,3.43l-4.4-1.17v9.91l4.4,1.17V7.63Zm2.21,9.84l3.37-1.06V6.53l-3.37,1.06v9.88Zm-8.82-1.06V6.53l-3.38,1.06v9.88l3.38-1.06Z"/>' } }));
o.displayName = "PaperMapOutline";
export {
  o as PaperMapOutline
};
