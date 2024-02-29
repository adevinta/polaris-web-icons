import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CardFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="CardFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m19.76,4.5H4.16c-1.24,0-2.16.91-2.16,2.15v2.82h20v-2.82c-.08-1.24-1-2.15-2.24-2.15ZM2,10.96v6.38c0,1.16,1,2.15,2.16,2.15h15.68c1.16,0,2.16-.99,2.16-2.15v-6.38H2Zm11.7,3.73h4.15c.42,0,.75.33.75.75s-.33.75-.75.75h-4.15c-.41,0-.75-.33-.75-.75s.33-.75.75-.75Z"/>',
      }}
    />
  )
)

CardFill.displayName = 'CardFill'

export const tags = ['CardFill', '']
