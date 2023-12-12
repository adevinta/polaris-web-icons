import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BatchPurchase = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="BatchPurchase"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m20.88,2.38h-12.33c-1.2,0-2.21,1-2.21,2.18v.54h-3.13c-1.2,0-2.21,1-2.21,2.18v12.17c0,1.18,1.01,2.18,2.21,2.18h12.33c1.2,0,2.21-1,2.21-2.18v-.54h3.04c1.2,0,2.21-1,2.21-2.18V4.55c.09-1.27-.92-2.18-2.12-2.18Zm-7.36,2.18h2.3v3.9h-2.3v-3.9Zm2.02,14.89H3.21V7.28h3.04v9.44c0,1.18,1.01,2.18,2.21,2.18h7.09v.54Zm5.34-2.72h-12.33V4.55h2.85v4.45c0,.45.18.82.46,1.18.28.36.74.45,1.2.45h3.4c.46,0,.83-.18,1.2-.45.18-.36.37-.82.37-1.27v-4.36h2.85v12.17Z"/><path d="m19.13,14h-2.76c-.64,0-1.1.45-1.1,1.09s.46,1.09,1.1,1.09h2.76c.64,0,1.1-.45,1.1-1.09s-.46-1.09-1.1-1.09Z"/>',
      }}
    />
  )
)

BatchPurchase.displayName = 'BatchPurchase'

export const tags = ['BatchPurchase', '']
