import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Sport = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Sport"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.23,9.82l-.43.44-2.36-2.26-1.88-1.8.42-.43c.07-.07.17-.11.27-.12.09,0,.2.04.27.11l1.26,1.21h0l1.16,1.11h0l1.28,1.23c.07.07.11.15.11.25,0,.09-.03.18-.1.25Zm-.57,1.85l-.37.38-2.18-2.08s0,0,0,0l-.58-.56-2.76-2.64.35-.36c.09-.09.21-.14.33-.14.12,0,.25.05.34.13l.06.05s0,0,0,0l2.02,1.93,2.79,2.67c.09.08.13.19.14.31,0,.12-.04.23-.12.31Zm-7.39,2.76l-.34-.33-.34-.33,4.13-4.22.34.33.34.33-4.13,4.22Zm1.58,3.17c-.08.08-.19.13-.31.13-.12,0-.23-.04-.32-.12l-4.86-4.65c-.09-.09-.14-.2-.15-.33,0-.13.05-.24.13-.33l.35-.36,2.18,2.08.58.56,2.76,2.64-.37.38Zm-1.85.63c-.07.07-.15.11-.25.11-.1,0-.19-.03-.25-.1l-1.28-1.23s0,0,0,0l-.59-.57-1.84-1.76c-.07-.07-.12-.17-.12-.27,0-.1.04-.2.11-.27l.42-.43,3.35,3.21.89.85-.44.45Zm-3.2-.25l-.68-.65.7-.72.34.32.34.33-.7.72Zm10.38-11.96l.68.65-.7.72-.68-.65.7-.72Zm1.82,3.54c0-.27-.12-.52-.31-.71l-1.04-1,.94-.96c.13-.13.13-.34,0-.47l-1.16-1.11c-.06-.06-.15-.09-.24-.09-.09,0-.17.04-.24.1l-.94.96-1.02-.98c-.42-.4-1.09-.39-1.49.02l-.44.45c-.18-.11-.39-.16-.61-.17-.31,0-.59.13-.8.35l-.58.6c-.13.13-.12.34,0,.47l2.18,2.08-4.13,4.22-2.18-2.08c-.06-.06-.15-.1-.24-.09-.09,0-.17.04-.24.1l-.59.6c-.21.22-.33.5-.32.81,0,.22.07.42.19.6l-.44.45c-.2.2-.3.46-.3.74,0,.28.12.54.32.73l1.02.98-.94.96c-.13.13-.13.34,0,.47l1.16,1.11c.06.06.15.09.23.09h0c.09,0,.17-.04.24-.1l.94-.96,1.04,1c.19.18.45.29.71.29h.02c.27,0,.53-.11.72-.31l.45-.46c.18.11.38.17.6.17h.02c.3,0,.58-.12.78-.34l.61-.62c.13-.13.13-.34,0-.47l-2.18-2.08,4.13-4.22,2.18,2.08c.07.06.15.09.23.09s.18-.03.24-.1l.61-.62c.21-.21.32-.49.31-.79,0-.22-.07-.43-.19-.6l.45-.46c.19-.19.29-.45.29-.72Z"/>',
      }}
    />
  )
)

Sport.displayName = 'Sport'

export const tags = ['Sport', '']
