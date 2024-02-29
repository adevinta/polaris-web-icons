import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Twitter = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Twitter"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m17.8,3h3.1l-6.8,7.7,7.9,10.3h-6.2l-4.8-6.2-5.5,6.2h-3.1l7.2-8.2L2,3h6.3l4.4,5.8,5.1-5.8Zm-1.1,16.2h1.7L7.4,4.7h-1.8l11.1,14.5Z"/>',
      }}
    />
  )
)

Twitter.displayName = 'Twitter'

export const tags = ['Twitter', '']
