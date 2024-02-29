import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeappliancesProduct = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="HomeappliancesProduct"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.44,18.25H6.56c-.16,0-.3-.13-.3-.29v-9.43h11.47v9.43c0,.16-.13.29-.3.29ZM6.56,5.75h10.88c.16,0,.3.13.3.29v1.76H6.26v-1.76c0-.16.13-.29.3-.29Zm10.88-.75H6.56c-.59,0-1.06.46-1.06,1.03v11.93c0,.57.48,1.04,1.06,1.04h10.88c.59,0,1.06-.46,1.06-1.04V6.03c0-.57-.48-1.03-1.06-1.03Z"/><path fill-rule="evenodd" d="m12.5,17.23c-1.78,0-3.23-1.45-3.23-3.23s1.45-3.23,3.23-3.23,3.23,1.45,3.23,3.23-1.45,3.23-3.23,3.23Zm0-7.23c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm-5.59-3h2.18c.23,0,.41-.22.41-.5s-.18-.5-.41-.5h-2.18c-.23,0-.41.22-.41.5s.18.5.41.5Zm10.09,1c.28,0,.5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5Zm-2,0c.28,0,.5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5Z"/><path fill-rule="evenodd" d="m12,15.3c-.99,0-1.8-.81-1.8-1.8s.81-1.8,1.8-1.8,1.79.81,1.79,1.8-.8,1.8-1.79,1.8Zm0-4.3c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5-1.12-2.5-2.5-2.5Z"/>',
      }}
    />
  )
)

HomeappliancesProduct.displayName = 'HomeappliancesProduct'

export const tags = ['HomeappliancesProduct', '']
