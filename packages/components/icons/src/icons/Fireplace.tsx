import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Fireplace = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Fireplace"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m17.58,16.56h-1.29v-5.24c0-.21-.17-.37-.38-.37h-7.84c-.21,0-.38.17-.38.37v5.24h-1.29v-7.52h11.17v7.52Zm-6.52,0c-.35-.46-.46-.89-.46-1.2.31.19.66.35.87.4.11.02.22,0,.3-.07.09-.07.14-.16.15-.27v-.19c.03-.35.05-1.02.29-1.4.24.33.36.98.36,1.41,0,.14.08.27.21.34.13.07.28.05.39-.04.24-.19.46-.34.68-.46-.01.59-.24,1.32-.55,1.47h-2.24Zm4.48,0h-1.29c.34-.66.42-1.58.28-2.11-.03-.1-.09-.18-.18-.23-.09-.05-.2-.06-.29-.03-.3.09-.56.23-.8.38-.09-.55-.33-1.29-.9-1.58-.12-.06-.27-.05-.38.03-.59.4-.73,1.22-.78,1.82-.22-.12-.46-.27-.6-.39-.08-.08-.2-.11-.31-.09-.11.02-.21.08-.27.18-.23.39-.29,1.2.14,2.03h-1.72v-4.87h7.09v4.87Zm-10.29,1.19h13.5v-.44H5.25v.44Zm0-9.46h13.5v-.44H5.25v.44Zm3.11-2.04h7.29l.31.85h-7.9l.31-.85Zm10.77,2.79c.21,0,.38-.17.38-.37v-1.19c0-.21-.17-.37-.38-.37h-2.37l-.49-1.35c-.05-.15-.19-.25-.35-.25h-7.81c-.16,0-.3.1-.35.25l-.49,1.35h-2.37c-.21,0-.38.17-.38.37v1.19c0,.21.17.37.38.37h.79v7.52h-.79c-.21,0-.38.17-.38.37v1.19c0,.21.17.37.38.37h14.25c.21,0,.38-.17.38-.37v-1.19c0-.21-.17-.37-.38-.37h-.79v-7.52h.79Z"/>',
      }}
    />
  )
)

Fireplace.displayName = 'Fireplace'

export const tags = ['Fireplace', '']
