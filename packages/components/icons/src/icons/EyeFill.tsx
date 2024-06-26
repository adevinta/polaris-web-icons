import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EyeFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="EyeFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M14.5 12c0 1.3807-1.1193 2.5-2.5 2.5S9.5 13.3807 9.5 12s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"/><path fill-rule="evenodd" d="M2.3565 11.0758C3.5712 8.8726 6.7495 4.5 12 4.5s8.4288 4.3726 9.6435 6.5758a1.912 1.912 0 0 1 0 1.8484C20.4288 15.1274 17.2505 19.5 12 19.5s-8.4288-4.3726-9.6435-6.5758a1.9117 1.9117 0 0 1 0-1.8484ZM12 16.5c2.4853 0 4.5-2.0147 4.5-4.5S14.4853 7.5 12 7.5 7.5 9.5147 7.5 12s2.0147 4.5 4.5 4.5Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

EyeFill.displayName = 'EyeFill'

export const tags = ['EyeFill', '']
