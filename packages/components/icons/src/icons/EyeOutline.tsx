import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EyeOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="EyeOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M4.1309 12C5.3 14.1022 7.9585 17.5 12 17.5c4.0415 0 6.7-3.3978 7.8691-5.5C18.7 9.8978 16.0415 6.5 12 6.5c-4.0415 0-6.7 3.3978-7.8691 5.5Zm-1.7744-.9242C3.5712 8.8726 6.7495 4.5 12 4.5s8.4288 4.3726 9.6435 6.5758a1.912 1.912 0 0 1 0 1.8484C20.4288 15.1274 17.2505 19.5 12 19.5s-8.4288-4.3726-9.6435-6.5758a1.9117 1.9117 0 0 1 0-1.8484Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 14c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Zm0 2c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

EyeOutline.displayName = 'EyeOutline'

export const tags = ['EyeOutline', '']
