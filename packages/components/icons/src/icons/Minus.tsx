import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Minus = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Minus"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9955 11H3.0045C2.44978 11 2 11.4478 2 12C2 12.5522 2.44978 13 3.0045 13H20.9955C21.5502 13 22 12.5522 22 12C22 11.4478 21.5502 11 20.9955 11Z"/>',
      }}
    />
  )
)

Minus.displayName = 'Minus'

export const tags = ['Minus', '']
