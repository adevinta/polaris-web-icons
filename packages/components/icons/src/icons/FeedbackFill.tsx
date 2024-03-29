import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FeedbackFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="FeedbackFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M5 2C3.3432 2 2 3.344 2 5.0018V16c0 1.6579 1.3432 3 3 3h12.1716c.2652 0 .5195.1157.7071.3034l2.3971 2.3986C20.9121 22.3386 22 21.9004 22 21V5.0018C22 3.344 20.6569 2 19 2H5Zm7 3.502c-.5523 0-1 .448-1 1.0007V10.5c0 .5526.4477 1 1 1s1-.4474 1-1V6.5027c0-.5526-.4477-1.0006-1-1.0006Zm1.25 8.748c0 .6907-.5596 1.25-1.25 1.25s-1.25-.5593-1.25-1.25c0-.6908.5596-1.25 1.25-1.25s1.25.5592 1.25 1.25Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

FeedbackFill.displayName = 'FeedbackFill'

export const tags = ['FeedbackFill', '']
