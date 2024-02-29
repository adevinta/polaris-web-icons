import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Duplex = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Duplex"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18,19.14c0,.2-.16.36-.35.36H6.35c-.19,0-.35-.16-.35-.36V4.86c0-.2.16-.36.35-.36h11.29c.19,0,.35.16.35.36v14.29Zm-.75-13.89H6.75v13.5h3.75v-3.38c0-.18.13-.34.31-.37h.07s3,0,3,0c.21,0,.38.17.38.38v3.37h3s0-6,0-6H6.75v-.75h10.5v-5.25H6.75v-.75h10.5v-.75Zm-3.75,10.5h-2.25v3h2.25v-3Zm-3.38-8.25c.21,0,.38.17.38.38v2.25c0,.21-.17.38-.38.38h-2.25c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h2.25Zm6,0c.21,0,.38.17.38.38v2.25c0,.21-.17.38-.38.38h-2.25c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h2.25Zm-6.38.75h-1.5v1.5h1.5v-1.5Zm6,0h-1.5v1.5h1.5v-1.5Z"/>',
      }}
    />
  )
)

Duplex.displayName = 'Duplex'

export const tags = ['Duplex', '']
