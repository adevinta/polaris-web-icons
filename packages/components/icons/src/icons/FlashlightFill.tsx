import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlashlightFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="FlashlightFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m17.83,4.55v-.04c0-1.38-1.11-2.51-2.48-2.51h-6.7c-1.37,0-2.48,1.12-2.48,2.5v.04h11.66Zm-11.66,2.54c0,.53.25.99.49,1.34.25.36.58.71.86,1.02.04.04.08.08.12.12.25.27.46.48.62.69.16.22.2.31.2.31v8.18c0,1.79,1.44,3.25,3.21,3.25h.67c1.77,0,3.21-1.46,3.21-3.25v-8.18s.03-.09.2-.3c.16-.21.37-.43.63-.69.04-.04.08-.08.12-.12.29-.3.61-.65.86-1.02.24-.35.49-.82.49-1.34v-1.03H6.17v1.03h0Zm4.95,6.71c.21-.22.49-.33.8-.33s.58.11.8.33c.21.22.33.49.33.81s-.11.58-.33.81c-.21.22-.49.33-.8.33s-.58-.11-.8-.33c-.21-.22-.33-.49-.33-.81s.11-.58.33-.81Z"/>',
      }}
    />
  )
)

FlashlightFill.displayName = 'FlashlightFill'

export const tags = ['FlashlightFill', '']
