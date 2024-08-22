import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PhotoPack = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="PhotoPack"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M3 6c0-1.6569 1.3431-3 3-3h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-.5523 0-1 .4477-1 1v12c0 .5523.4477 1 1 1h12c.5523 0 1-.4477 1-1v-7c0-.5523.4477-1 1-1s1 .4477 1 1v7c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V6Zm16-2c0-.5523-.4477-1-1-1s-1 .4477-1 1v1h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1v1c0 .5523.4477 1 1 1s1-.4477 1-1V7h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1V4ZM6.0365 15.4453l2.1314-3.1972c.3959-.5938 1.2683-.5938 1.6642 0l.2914.4371c.4072.6108 1.3118.5893 1.6895-.0402l1.3469-2.2449c.3843-.6404 1.3096-.6489 1.7055-.0155l3.1784 5.0854c.4162.6661-.0626 1.53-.848 1.53H6.8685c-.7987 0-1.275-.8901-.832-1.5547Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

PhotoPack.displayName = 'PhotoPack'

export const tags = ['PhotoPack', '']
