import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Loft = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Loft"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.77,5.5c.21,0,.38.17.38.38s-.17.38-.38.38h-.04v11.46h.4c.21,0,.38.17.38.38s-.17.38-.38.38h-9.63s-.03,0-.04,0h-2.1s-.03,0-.04,0h-2.43c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.4V6.26h-.02c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h13.52Zm-9.69,9.16h-1.35v3.07h1.35v-3.07Zm8.9-8.39H6.02v11.46h.95v-3.45c0-.21.17-.38.38-.38h2.1c.21,0,.37.17.37.38v3.45h8.15V6.26Zm-.91,7.63c.21,0,.38.17.38.38v2.25c0,.21-.17.38-.38.38h-5.04c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h5.04Zm-.38.76h-1.75v1.49h1.75v-1.49Zm-2.5,0h-1.79v1.49h1.79v-1.49Zm2.88-7.68c.21,0,.38.17.38.38v5.51c0,.21-.17.38-.38.38H6.92c-.21,0-.38-.17-.38-.38v-5.51c0-.21.17-.38.38-.38h10.15Zm-.38,3.52h-1.75v1.99h1.75v-1.99Zm-5.04,0h-1.82v1.99h1.82v-1.99Zm2.54,0h-1.79v1.99h1.79v-1.99Zm-5.11,0h-1.79v1.99h1.79v-1.99Zm5.11-2.75h-1.79v1.99h1.79v-1.99Zm2.5,0h-1.75v1.99h1.75v-1.99Zm-7.61,0h-1.79v1.99h1.79v-1.99Zm2.57,0h-1.82v1.99h1.82v-1.99Z"/>',
      }}
    />
  )
)

Loft.displayName = 'Loft'

export const tags = ['Loft', '']
