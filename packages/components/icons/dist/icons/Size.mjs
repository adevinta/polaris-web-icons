import t from "react";
const o = t.forwardRef(({ title: e, fill: v = "currentColor", stroke: l = "none", ...r }, i) => t.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Size", ...e && { "data-title": e }, fill: v, stroke: l, ...r, dangerouslySetInnerHTML: { __html: (e === void 0 ? "" : `<title>${e}</title>`) + '<path fill-rule="evenodd" d="m18.8,7.5c.39,0,.7.3.7.66v7.67c0,.37-.31.66-.7.66H5.2c-.39,0-.7-.3-.7-.66v-7.67c0-.37.31-.66.7-.66h13.6Zm-12.05.75h-1.5v6h9.37c.21,0,.38.17.38.38,0,.18-.14.34-.31.37h-.07s-9.37,0-9.37,0v.75h13.5v-7.5h-2.25v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58h-1.5v1.76c0,.27-.17.49-.38.49-.18,0-.34-.17-.37-.4v-.09s0-1.76,0-1.76h-1.5v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58h-1.5v1.76c0,.27-.17.49-.38.49-.18,0-.34-.17-.37-.4v-.09s0-1.76,0-1.76h-1.5v2.58c0,.23-.17.42-.38.42-.18,0-.34-.15-.37-.34v-.07s0-2.58,0-2.58Z"/>' } }));
o.displayName = "Size";
export {
  o as Size
};
