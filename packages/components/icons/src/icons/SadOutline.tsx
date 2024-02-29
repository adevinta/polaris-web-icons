import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SadOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SadOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m8.6,16.54c.75-1.61,2.62-2.55,4.52-2.06.98.27,1.86,1.01,2.39,2.08.24.5.84.7,1.34.45.5-.24.7-.84.45-1.34-.75-1.52-2.06-2.68-3.66-3.12h0c-2.83-.75-5.69.65-6.85,3.14-.23.5-.02,1.1.48,1.33.5.23,1.1.02,1.33-.48Zm-1.33-9.29c.55,0,1,.45,1,1,0,.1.04.2.11.27.07.07.17.11.27.11s.2-.04.27-.11c.07-.07.11-.17.11-.27,0-.55.45-1,1-1s1,.45,1,1c0,.63-.25,1.24-.7,1.69-.45.45-1.05.7-1.69.7s-1.24-.25-1.69-.7c-.45-.45-.7-1.05-.7-1.69,0-.55.45-1,1-1Zm7.69,1c0-.55-.45-1-1-1s-1,.45-1,1c0,.63.25,1.24.7,1.69.45.45,1.05.7,1.69.7s1.24-.25,1.69-.7c.45-.45.7-1.05.7-1.69,0-.55-.45-1-1-1s-1,.45-1,1c0,.1-.04.2-.11.27-.07.07-.17.11-.27.11s-.2-.04-.27-.11c-.07-.07-.11-.17-.11-.27Z"/><path fill-rule="evenodd" d="m12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2ZM4,12c0-4.42,3.58-8,8-8s8,3.58,8,8-3.58,8-8,8-8-3.58-8-8Z"/>',
      }}
    />
  )
)

SadOutline.displayName = 'SadOutline'

export const tags = ['SadOutline', '']
