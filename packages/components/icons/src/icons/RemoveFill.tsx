import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const RemoveFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="RemoveFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m22,12c0,5.52-4.48,10-10,10S2,17.52,2,12,6.48,2,12,2s10,4.48,10,10Zm-14.17-1c-.55,0-1,.45-1,1s.45,1,1,1h8.54c.55,0,1-.45,1-1s-.45-1-1-1H7.83Z"/>',
      }}
    />
  )
)

RemoveFill.displayName = 'RemoveFill'

export const tags = ['RemoveFill', '']
