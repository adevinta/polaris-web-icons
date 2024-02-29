import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Memory = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Memory"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.64,4.5c.2,0,.36.16.36.37v14.27c0,.2-.16.37-.36.37H6.36c-.2,0-.36-.16-.36-.37V7.86c0-.09.03-.17.09-.24l2.53-2.99c.07-.08.17-.13.28-.13h8.74Zm-.36.73h-8.21l-2.34,2.76v10.77h10.55V5.23Zm-1.13,9.77c.2,0,.36.14.36.31v2.39c0,.17-.16.31-.36.31H7.86c-.2,0-.36-.14-.36-.31v-2.39c0-.17.16-.31.36-.31h8.29Zm-.36.61h-7.58v1.77h7.58v-1.77Zm-4.91-9.61c.18,0,.34.12.37.29v.06s0,2.29,0,2.29c0,.19-.17.35-.38.35-.18,0-.34-.12-.37-.29v-.06s0-2.29,0-2.29c0-.19.17-.35.38-.35Zm1.5,0c.18,0,.34.12.37.29v.06s0,2.29,0,2.29c0,.19-.17.35-.38.35-.18,0-.34-.12-.37-.29v-.06s0-2.29,0-2.29c0-.19.17-.35.38-.35Zm1.5,0c.18,0,.34.12.37.29v.06s0,2.29,0,2.29c0,.19-.17.35-.38.35-.18,0-.34-.12-.37-.29v-.06s0-2.29,0-2.29c0-.19.17-.35.38-.35Zm1.5,0c.18,0,.34.12.37.29v.06s0,2.29,0,2.29c0,.19-.17.35-.38.35-.18,0-.34-.12-.37-.29v-.06s0-2.29,0-2.29c0-.19.17-.35.38-.35Z"/>',
      }}
    />
  )
)

Memory.displayName = 'Memory'

export const tags = ['Memory', '']
