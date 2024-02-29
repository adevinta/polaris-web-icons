import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Balcony = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Balcony"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.5,19.5H4.5v-8.63c0-.21.17-.38.38-.38.18,0,.34.13.37.31v.07s0,.38,0,.38h2.25v-6c0-.41.34-.75.75-.75h7.5c.41,0,.75.34.75.75v6h2.25v-.38c0-.21.17-.38.38-.38.18,0,.34.13.37.31v.07s0,8.63,0,8.63Zm-.75-.75v-.75H5.25v.75h13.5Zm0-1.5v-5.25h-2.25v5.25h2.25Zm-11.25-5.25h-2.25v5.25h2.25v-5.25Zm4.12,0h-3.38v5.25h3.38v-5.25Zm4.12,0h-3.38v5.25h3.38v-5.25Zm-4.12-6.75h-3.38v6h3.38v-1.5h-.75c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s.75,0,.75,0v-3.75Zm4.12,0h-3.38v6h3.38v-6Z"/>',
      }}
    />
  )
)

Balcony.displayName = 'Balcony'

export const tags = ['Balcony', '']
