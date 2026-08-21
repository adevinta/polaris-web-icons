import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Plus = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Plus"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 2C12.5521 2 12.9998 2.44772 12.9998 3V10.9447H21C21.5523 10.9447 22 11.3924 22 11.9447C22 12.4969 21.5523 12.9447 21 12.9447H12.9998V21C12.9998 21.5523 12.5521 22 11.9998 22C11.4475 22 10.9998 21.5523 10.9998 21V12.9447H3C2.44772 12.9447 2 12.4969 2 11.9447C2 11.3924 2.44772 10.9447 3 10.9447H10.9998V3C10.9998 2.44772 11.4475 2 11.9998 2Z"/>',
      }}
    />
  )
)

Plus.displayName = 'Plus'

export const tags = ['Plus', '']
