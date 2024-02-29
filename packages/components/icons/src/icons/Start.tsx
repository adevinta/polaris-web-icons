import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Start = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Start"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,4.5c4.14,0,7.5,3.36,7.5,7.5s-3.36,7.5-7.5,7.5-7.5-3.36-7.5-7.5,3.36-7.5,7.5-7.5Zm0,.7c-3.76,0-6.8,3.05-6.8,6.8s3.05,6.8,6.8,6.8,6.8-3.05,6.8-6.8-3.05-6.8-6.8-6.8Zm0,.8c3.31,0,6,2.69,6,6s-2.69,6-6,6-6-2.69-6-6,2.69-6,6-6Zm0,.7c-2.93,0-5.3,2.37-5.3,5.3s2.37,5.3,5.3,5.3,5.3-2.37,5.3-5.3-2.37-5.3-5.3-5.3Zm2.67,4.55c.18,0,.33.14.33.32,0,.16-.12.29-.27.32h-.06s-2.02,0-2.02,0v3.54c0,.16-.12.29-.27.32h-.06c-.16,0-.29-.11-.32-.26v-.06s0-3.86,0-3.86c0-.16.12-.29.27-.32h.06s2.34,0,2.34,0Z"/>',
      }}
    />
  )
)

Start.displayName = 'Start'

export const tags = ['Start', '']
