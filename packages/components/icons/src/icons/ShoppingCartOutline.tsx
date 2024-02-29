import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShoppingCartOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="ShoppingCartOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m7.17,18.61c-.89,0-1.7.73-1.7,1.69s.73,1.69,1.7,1.69,1.7-.73,1.7-1.69-.81-1.69-1.7-1.69Zm6.97,0c-.89,0-1.7.73-1.7,1.69s.73,1.69,1.7,1.69c.89,0,1.7-.73,1.7-1.69s-.81-1.69-1.7-1.69Zm-7.21-8.47c.08.24.24.48.41.56.16.08.32.16.49.16h.24c.49-.16.81-.65.73-1.21l-.32-1.37c-.16-.56-.65-.89-1.22-.73-.49.16-.81.65-.65,1.21l.32,1.37Zm4.86.65h.24c.16,0,.32-.08.49-.16.24-.16.41-.32.41-.56l.32-1.37c.08-.24,0-.48-.08-.73-.08-.24-.32-.4-.57-.4-.49-.16-1.05.16-1.22.73l-.32,1.37c-.08.48.24,1.05.73,1.13Z"/><path d="m21.03,2h-2.19c-.41,0-.73.16-1.05.4-.32.24-.49.56-.57.89l-.41,1.45H3.68c-.24,0-.49.08-.73.16-.16.16-.41.24-.57.48-.16.16-.24.4-.32.65-.08.24-.08.48,0,.73l1.13,5.48c.08.4.24.73.57.97.32.24.65.4,1.05.4h10.21l-.32,1.53H6.44c-.57,0-.97.4-.97.97s.41.97.97.97h8.43c.41,0,.73-.16,1.05-.4.32-.24.49-.56.57-.97l.57-2.9,1.38-6.85.57-2.02h2.03c.57,0,.97-.4.97-.97s-.41-.97-.97-.97Zm-5.67,9.68H5.06l-1.05-5h12.4l-1.05,5Z"/>',
      }}
    />
  )
)

ShoppingCartOutline.displayName = 'ShoppingCartOutline'

export const tags = ['ShoppingCartOutline', '']
