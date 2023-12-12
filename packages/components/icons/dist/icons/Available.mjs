import t from "react";
const i = t.forwardRef(({ title: l, fill: c = "currentColor", stroke: e = "none", ...a }, r) => t.createElement("svg", { ref: r, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "data-title": "Available", ...l && { "data-title": l }, fill: c, stroke: e, ...a, dangerouslySetInnerHTML: { __html: (l === void 0 ? "" : `<title>${l}</title>`) + '<path d="m15.33,10.75c.14-.15.14-.39-.01-.53-.15-.14-.39-.14-.53.01l-3.39,3.57-1.89-1.91c-.15-.15-.38-.15-.53,0-.15.15-.15.38,0,.53l2.43,2.46,3.93-4.13Z"/><path fill-rule="evenodd" d="m19.83,10c.25-.37.09-.87-.33-1.02l-2.26-.8-.07-2.39c-.01-.44-.44-.75-.87-.63l-2.3.68-1.46-1.89c-.27-.35-.8-.35-1.07,0l-1.47,1.9-2.3-.67c-.42-.12-.85.19-.86.63l-.07,2.4-2.26.82c-.42.15-.58.65-.33,1.02l1.35,1.97-1.35,1.98c-.25.37-.09.87.33,1.02l2.26.8.07,2.39c.01.44.44.75.87.63l2.3-.68,1.46,1.89c.27.35.8.35,1.07,0l1.47-1.9,2.3.67c.42.12.85-.19.86-.63l.07-2.4,2.26-.82c.42-.15.58-.65.33-1.02l-1.35-1.97,1.35-1.98Zm-2.89-1.13l2.21.78-1.33,1.95c-.16.23-.16.53,0,.76l1.33,1.94-2.22.8c-.26.09-.44.34-.45.62l-.07,2.35-2.26-.65c-.27-.08-.55.02-.72.24l-1.44,1.87-1.44-1.86c-.17-.22-.46-.31-.73-.23l-2.26.67-.07-2.35c0-.28-.19-.52-.45-.62l-2.21-.78,1.33-1.95c.16-.23.16-.53,0-.76l-1.33-1.94,2.22-.8c.26-.09.44-.34.45-.62l.07-2.35,2.26.65c.27.08.55-.02.72-.24l1.44-1.87,1.44,1.86c.17.22.46.31.73.23l2.26-.67.07,2.35c0,.28.19.52.45.62Z"/>' } }));
i.displayName = "Available";
export {
  i as Available
};
