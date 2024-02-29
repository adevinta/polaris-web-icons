import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Energy = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Energy"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.38,8.25c.18,0,.34.13.37.31v.07s0,1.13,0,1.13h.33c.2,0,.37.13.41.31v.07s0,9,0,9c0,.18-.15.34-.34.37h-.07s-6.67,0-6.67,0c-.2,0-.37-.13-.41-.31v-.07s0-5.63,0-5.63c0-.07.02-.14.06-.19l.05-.06,3.33-3.37c.06-.06.15-.11.24-.12h.07s.75,0,.75,0v-1.13c0-.18.13-.34.31-.37h.07s1.5,0,1.5,0Zm.38,2.25h-2.81l-3.19,3.14v5.11h6v-8.25Zm-1.12,1.5c.18,0,.34.12.37.27v.06s0,5.33,0,5.33c0,.16-.13.3-.31.33h-.07s-3.75,0-3.75,0c-.18,0-.34-.12-.37-.27v-.06s0-3.33,0-3.33c0-.06.02-.12.05-.17l.04-.05,1.88-2c.06-.06.14-.1.22-.11h.07s1.88,0,1.88,0Zm-.38.75h-1.32l-1.68,1.72v2.78h3v-4.5Zm-3-2.62c0,.21-.17.38-.38.38-.18,0-.34-.13-.37-.31v-.07s0-1.88,0-1.88H5.25v6h5.24c.18,0,.34.13.37.31v.07c0,.18-.13.34-.3.37h-.07s-5.62,0-5.62,0c-.18,0-.34-.13-.37-.31v-.07s0-8.25,0-8.25c0-.18.13-.34.31-.37h.07s.38,0,.38,0v-1.12c0-.18.13-.34.31-.37h.07s1.5,0,1.5,0c.18,0,.34.13.37.31v.07s0,1.12,0,1.12h3.75v-1.12c0-.18.13-.34.31-.37h.07s1.5,0,1.5,0c.18,0,.34.13.37.31v.07s0,1.12,0,1.12h.38c.18,0,.34.13.37.31v.07s0,3.75,0,3.75Zm-7.12-.38c.18,0,.34.13.37.31v.07s0,.38,0,.38h.38c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-.38,0-.38,0v.38c0,.21-.17.38-.38.38-.18,0-.34-.13-.37-.31v-.07s0-.38,0-.38h-.38c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s.38,0,.38,0v-.38c0-.21.17-.38.38-.38Zm5.25.75c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-1.5,0-1.5,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s1.5,0,1.5,0Zm5.62-1.5h-.75v.75h.75v-.75Zm-4.5-2.25H5.25v.75h8.25v-.75Zm-6.75-1.5h-.75v.75h.75v-.75Zm6,0h-.75v.75h.75v-.75Z"/>',
      }}
    />
  )
)

Energy.displayName = 'Energy'

export const tags = ['Energy', '']
