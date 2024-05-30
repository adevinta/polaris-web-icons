import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SortFilled = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SortFilled"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M11.7236 7.5387a.9865.9865 0 0 1-1.4027.0288L7.992 5.3462V17c0 .5523-.4441 1-.992 1s-.992-.4477-.992-1V5.3462L3.679 7.5675a.9865.9865 0 0 1-1.4026-.0288c-.3794-.3984-.3666-1.0315.0286-1.414l4.008-3.846a.9864.9864 0 0 1 1.374 0l4.008 3.846c.3952.3825.408 1.0156.0286 1.414Zm.5528 8.9226a.9865.9865 0 0 1 1.4027-.0288l2.3288 2.2213V7c0-.5523.4442-1 .9921-1s.9921.4477.9921 1v11.6538l2.3288-2.2213a.9865.9865 0 0 1 1.4027.0288c.3794.3984.3666 1.0315-.0286 1.4139l-4.008 3.8462a.9863.9863 0 0 1-1.374 0l-4.008-3.8462c-.3952-.3824-.408-1.0155-.0286-1.4139Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

SortFilled.displayName = 'SortFilled'

export const tags = ['SortFilled', '']
