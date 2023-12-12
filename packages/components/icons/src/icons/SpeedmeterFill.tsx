import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SpeedmeterFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SpeedmeterFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,2c-1.98,0-3.91.59-5.56,1.69-1.64,1.1-2.93,2.66-3.68,4.49-.76,1.83-.95,3.84-.57,5.78.39,1.94,1.34,3.72,2.74,5.12,1.4,1.4,3.18,2.35,5.12,2.74,1.94.39,3.95.19,5.78-.57,1.83-.76,3.39-2.04,4.49-3.68,1.1-1.64,1.69-3.58,1.69-5.56,0-2.65-1.05-5.2-2.93-7.07-1.88-1.88-4.42-2.93-7.07-2.93Zm0,1.95c2.14,0,4.18.85,5.69,2.36,1.51,1.51,2.36,3.56,2.36,5.69,0,.85-.13,1.69-.4,2.5h-5.92l3.27-5.46c.12-.22.15-.48.08-.72-.07-.24-.22-.45-.44-.58-.21-.13-.47-.17-.72-.12-.24.05-.46.2-.6.41l-3.88,6.47h-7.1c-.27-.81-.4-1.65-.4-2.5,0-2.13.85-4.18,2.35-5.69,1.51-1.51,3.55-2.36,5.69-2.36Z"/>',
      }}
    />
  )
)

SpeedmeterFill.displayName = 'SpeedmeterFill'

export const tags = ['SpeedmeterFill', '']
