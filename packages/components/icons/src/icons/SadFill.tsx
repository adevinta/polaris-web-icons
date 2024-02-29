import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SadFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SadFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,2C6.47,2,2,6.47,2,12s4.47,10,10,10,10-4.48,10-10S17.52,2,12,2Zm-4.73,5.25c.55,0,1,.45,1,1,0,.1.04.2.12.27.07.08.17.12.27.12s.2-.04.27-.12c.08-.07.12-.17.12-.27,0-.55.45-1,1-1s1,.45,1,1c0,.63-.25,1.24-.7,1.68-.45.45-1.05.7-1.68.7s-1.24-.25-1.68-.7c-.45-.45-.7-1.05-.7-1.68,0-.55.45-1,1-1h-.02Zm9.58,9.77c-.49.24-1.09.04-1.34-.45-.52-1.07-1.4-1.81-2.39-2.07-1.9-.5-3.77.44-4.53,2.06-.23.5-.82.72-1.32.48-.5-.23-.72-.83-.48-1.33,1.16-2.49,4.02-3.89,6.85-3.14h0c1.6.44,2.91,1.6,3.66,3.12.24.49.04,1.09-.45,1.34v-.02Zm.17-7.08c-.45.45-1.05.7-1.68.7s-1.24-.25-1.68-.7c-.45-.45-.7-1.05-.7-1.68,0-.55.45-1,1-1s1,.45,1,1c0,.1.04.2.12.27.07.08.17.12.28.12s.2-.04.27-.12c.07-.07.12-.17.12-.27,0-.55.45-1,1-1s1,.45,1,1c0,.63-.25,1.24-.7,1.68h-.02Z"/>',
      }}
    />
  )
)

SadFill.displayName = 'SadFill'

export const tags = ['SadFill', '']
