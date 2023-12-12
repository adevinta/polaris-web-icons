import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const VoiceFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="VoiceFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,2c-1.19,0-2.34.47-3.18,1.3-.84.83-1.32,1.97-1.32,3.15v4.86c0,1.18.47,2.31,1.32,3.15.84.83,1.99,1.3,3.18,1.3s2.34-.47,3.18-1.3c.84-.83,1.32-1.97,1.32-3.15v-4.86c0-1.18-.47-2.31-1.32-3.15-.84-.83-1.99-1.3-3.18-1.3Z"/><path d="m5.98,12c0-.54-.44-.98-.99-.98-.55,0-.99.44-.99.98,0,.95.19,1.89.55,2.77.37.88.9,1.68,1.58,2.35.68.67,1.48,1.2,2.37,1.57.8.33,1.64.51,2.5.54v1.8c0,.54.44.98.99.98s.99-.44.99-.98v-1.8c.86-.03,1.71-.22,2.5-.54.89-.36,1.69-.89,2.37-1.57.68-.67,1.22-1.47,1.58-2.35.37-.88.55-1.82.55-2.77,0-.54-.45-.98-.99-.98-.55,0-.99.44-.99.98,0,.69-.13,1.38-.4,2.01-.27.64-.66,1.22-1.15,1.71-.49.49-1.08.88-1.73,1.14-.65.26-1.34.4-2.04.4h-1.41c-.7,0-1.39-.13-2.04-.4-.65-.26-1.23-.65-1.73-1.14-.49-.49-.89-1.07-1.15-1.71-.27-.64-.4-1.32-.4-2.01Z"/>',
      }}
    />
  )
)

VoiceFill.displayName = 'VoiceFill'

export const tags = ['VoiceFill', '']
