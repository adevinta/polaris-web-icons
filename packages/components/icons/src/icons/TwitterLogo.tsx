import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TwitterLogo = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="TwitterLogo"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M17.8 2.80005H20.9L14.1 10.5L22 20.9H15.8L11 14.6L5.5 20.9H2.4L9.6 12.7L2 2.80005H8.3L12.7 8.60005L17.8 2.80005ZM16.7 19.1H18.4L7.4 4.50005H5.6L16.7 19.1Z"/>',
      }}
    />
  )
)

TwitterLogo.displayName = 'TwitterLogo'

export const tags = ['TwitterLogo', '']
