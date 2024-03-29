import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FeedbackOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="FeedbackOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M11 6.5027c0-.5526.4477-1.0006 1-1.0006s1 .448 1 1.0006V10.5c0 .5526-.4477 1-1 1s-1-.4474-1-1V6.5027ZM12 15.5c.6904 0 1.25-.5592 1.25-1.25S12.6904 13 12 13s-1.25.5592-1.25 1.25.5596 1.25 1.25 1.25Z"/><path d="M2 5.0018C2 3.344 3.3432 2 5 2h14c1.6569 0 3 1.344 3 3.0018V21c0 .9004-1.0879 1.3386-1.7242.702l-2.3971-2.3986c-.1876-.1877-.4419-.3034-.7071-.3034H5c-1.6568 0-3-1.3421-3-3V5.0018Zm3-1.0006c-.5523 0-1 .448-1 1.0006V16c0 .5526.4477 1 1 1h12.1716c.7956 0 1.5587.337 2.1213.9l.7071.6958V5.0018c0-.5526-.4477-1.0006-1-1.0006H5Z"/>',
      }}
    />
  )
)

FeedbackOutline.displayName = 'FeedbackOutline'

export const tags = ['FeedbackOutline', '']
