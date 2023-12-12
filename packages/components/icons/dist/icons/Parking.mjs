import e from "react";
const o = e.forwardRef(({ title: t, fill: l = "currentColor", stroke: r = "none", ...c }, i) => e.createElement("svg", { ref: i, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Parking", ...t && { "data-title": t }, fill: l, stroke: r, ...c, dangerouslySetInnerHTML: { __html: (t === void 0 ? "" : `<title>${t}</title>`) + '<path fill-rule="evenodd" d="m11.3.9c.4-.4,1.1-.4,1.5,0l9.7,9c.3.3.5.6.6.9s.2.7.2,1.1v8.8c0,.7-.3,1.4-.8,1.9s-1.2.8-1.9.8H3.4c-.7,0-1.4-.3-1.9-.8-.5-.5-.8-1.2-.8-1.9v-8.8c0-.4.1-.7.2-1.1.1-.3.4-.7.6-.9L11.3.9ZM3.1,11.6l-.1.1v9c0,.1,0,.2.1.3.1.1.2.1.3.1h2.9v-7.3c0-.6.5-1.1,1.1-1.1h9.2c.3,0,.6.1.8.3.2.2.3.5.3.8v7.3h3c.1,0,.2,0,.3-.1s.1-.2.1-.3v-9c0-.1-.1-.1-.1-.1L12,3.3,3.1,11.6Zm12.4,9.5v-6.1h-6.9v6.1h6.9Zm1.2-8.9H7.5c-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1h9.2c.6,0,1.1.5,1.1,1.1s-.5,1.1-1.1,1.1Z"/>' } }));
o.displayName = "Parking";
export {
  o as Parking
};
