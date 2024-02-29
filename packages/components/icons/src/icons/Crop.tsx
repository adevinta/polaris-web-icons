import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Crop = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Crop"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M20 18c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2V8c0-1.1046-.8954-2-2-2H8V4c0-.5523-.4477-1-1-1s-1 .4477-1 1v2H4c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v8c0 1.1046.8954 2 2 2h8v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2Zm-4-2V8H8v8h8Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

Crop.displayName = 'Crop'

export const tags = ['Crop', '']
