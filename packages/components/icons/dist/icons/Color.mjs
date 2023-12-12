import l from "react";
const r = l.forwardRef(({ title: c, fill: t = "currentColor", stroke: e = "none", ...h }, o) => l.createElement("svg", { ref: o, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Color", ...c && { "data-title": c }, fill: t, stroke: e, ...h, dangerouslySetInnerHTML: { __html: (c === void 0 ? "" : `<title>${c}</title>`) + '<path fill-rule="evenodd" d="m11.94,4.5c1.22,0,1.93.33,2.19,1.02.16.43.15.79-.03,1.66l-.15.69-.06.34c-.13.79-.06,1.33.27,1.75.37.47.78.46,1.79.1l.28-.1c.86-.31,1.27-.37,1.77-.19.71.25,1.15,1.02,1.39,2.41.76,4.39-2.6,7.24-7.27,7.33h-.19c-4.1-.01-7.42-3.26-7.44-7.27v-.46c.01-3.93,3.21-7.14,7.23-7.26h.21Zm0,.72h-.19c-3.62.12-6.5,3.01-6.51,6.55v.46c.01,3.61,3,6.54,6.7,6.55h.18c4.26-.08,7.23-2.6,6.55-6.49-.2-1.16-.52-1.71-.92-1.85-.26-.09-.54-.05-1.14.15l-.56.2c-1.19.41-1.86.39-2.47-.39-.48-.61-.57-1.33-.42-2.3.02-.15.05-.29.09-.47l.09-.41c.18-.85.21-1.17.1-1.45-.13-.35-.55-.54-1.49-.54Zm-1.03,9.8c.8,0,1.44.63,1.44,1.41s-.65,1.41-1.44,1.41h-.42c-.8,0-1.44-.63-1.44-1.41s.65-1.41,1.44-1.41h.42Zm3.43-.5c.84,0,1.53.67,1.53,1.49v.14c0,.73-.57,1.34-1.32,1.41h-.12c-.8,0-1.45-.63-1.45-1.41v-.31c0-.35.14-.69.4-.94.22-.21.51-.35.83-.38h.13Zm-3.43,1.22h-.42c-.39,0-.7.31-.7.69s.32.69.7.69h.42c.39,0,.7-.31.7-.69s-.32-.69-.7-.69Zm3.44-.5h-.08c-.14.02-.27.08-.37.18-.12.11-.18.27-.18.43v.31c0,.38.32.69.69.69h.09c.36-.04.64-.34.64-.69v-.14c0-.43-.35-.77-.79-.77h0Zm2.41-3.35h.11c.74.07,1.31.68,1.31,1.41v.39c0,.66-.55,1.19-1.22,1.19h-.06c-.83,0-1.52-.64-1.59-1.46v-.12c0-.73.56-1.34,1.32-1.41h.13Zm0,.72h-.08c-.36.04-.64.34-.64.68v.09c.04.44.42.78.86.78h.06c.26,0,.48-.21.48-.47v-.39c0-.36-.28-.65-.62-.69h-.06Zm-8.15-5.53c.84-.59,2.01-.38,2.61.48.61.86.42,2.03-.42,2.62l-.59.42c-.84.59-2.01.38-2.61-.48-.61-.86-.42-2.03.42-2.62l.59-.42Zm2.02.9c-.37-.52-1.09-.66-1.6-.29l-.59.42c-.51.36-.63,1.08-.26,1.6.37.52,1.09.66,1.6.29l.59-.42c.51-.36.63-1.08.26-1.6Z"/>' } }));
r.displayName = "Color";
export {
  r as Color
};
