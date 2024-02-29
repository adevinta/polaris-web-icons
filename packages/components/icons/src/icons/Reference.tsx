import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Reference = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Reference"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.61,4.5c.19,0,.35.13.38.31v.07s0,14.25,0,14.25c0,.18-.14.34-.32.37h-.07s-11.22,0-11.22,0c-.19,0-.35-.13-.38-.31v-.07s0-11.64,0-11.64c0-.07.02-.13.05-.19l.04-.05,2.33-2.61c.06-.07.14-.11.23-.12h.07s8.89,0,8.89,0Zm-.36.75h-8.26s-.03,2.25-.03,2.25c0,.22.03.75-.31.74h-.07s-1.84,0-1.84,0v10.5h10.5V5.25Zm-1.88,11.25c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-1.5,0-1.5,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s1.5,0,1.5,0Zm-3-3.75c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-3.75,0-3.75,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s3.75,0,3.75,0Zm2.25-1.5c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-6,0-6,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s6,0,6,0Zm-6.38-5.3l-1.5,1.55h0s1.5,0,1.5,0v-1.56Zm7.12.05c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-3.75,0-3.75,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s3.75,0,3.75,0Z"/>',
      }}
    />
  )
)

Reference.displayName = 'Reference'

export const tags = ['Reference', '']
