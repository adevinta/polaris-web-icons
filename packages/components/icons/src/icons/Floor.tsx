import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Floor = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Floor"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.81,4.14c.12.14.1.35-.02.48l-.05.05-.96.7v4.95h1.85c.2,0,.37.17.37.37,0,.18-.13.34-.3.37h-.07s-2.59,0-2.59,0v1.86c0,.18-.13.34-.3.37h-.07s-2.59,0-2.59,0v1.86c0,.18-.13.34-.3.37h-.07s-2.59,0-2.59,0v1.86c0,.18-.13.33-.3.37h-.07s-1.85,0-1.85,0h0s-.74,0-.74,0h0s0,0,0,0v1.86c0,.21-.17.37-.37.37-.18,0-.33-.13-.36-.31v-.07s0-2.24,0-2.24c0-.21.17-.37.37-.37h.37v-4.61l-1.52,1.11c-.17.13-.42.1-.55-.07-.12-.14-.1-.35.02-.48l.05-.05,12.11-8.85c.17-.13.42-.1.55.07Zm-7.7,6.1l-2.22,1.62v5.16h1.48s0-1.86,0-1.86c0-.21.17-.37.37-.37h.37v-4.54Zm2.96-2.17l-2.22,1.62v5.09h1.48s0-1.86,0-1.86c0-.21.17-.37.37-.37h.37v-4.47Zm2.96-2.17l-2.22,1.62v5.02h1.48s0-1.86,0-1.86c0-.21.17-.37.37-.37h.37v-4.4Z"/>',
      }}
    />
  )
)

Floor.displayName = 'Floor'

export const tags = ['Floor', '']
