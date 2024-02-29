import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const LinensProduct = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="LinensProduct"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m16.5,5c.83,0,1.5.66,1.5,1.47h1.12c.21,0,.38.16.38.37,0,.18-.13.33-.31.36h-.07s-1.12,0-1.12,0v11.42c0,.18-.13.33-.31.36h-.07s-9,0-9,0c-.21,0-.38-.17-.38-.37v-6.26h-2.62c-.18,0-.34-.13-.37-.3v-.07s0-4.79,0-4.79h-.38c-.21,0-.38-.16-.38-.37,0-.18.13-.33.31-.36h.07s.41,0,.41,0l.03-.12c.22-.78.94-1.36,1.81-1.36h9.38Zm0,.74h-7.87c.16.21.28.46.34.74h.04s0,11.79,0,11.79h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75V6.47c0-.38-.29-.69-.66-.73h-.09Zm-8.25,1.47h-2.25v4.42h.75v-.37c0-.2.17-.37.38-.37.18,0,.34.13.37.3v.07s0,.37,0,.37h.75v-4.42Zm-1.12-1.47c-.49,0-.91.31-1.06.74h2.12s-.04-.1-.04-.1c-.18-.38-.57-.64-1.02-.64Z"/>',
      }}
    />
  )
)

LinensProduct.displayName = 'LinensProduct'

export const tags = ['LinensProduct', '']
