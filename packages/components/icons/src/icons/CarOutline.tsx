import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CarOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="CarOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m9.05,6.07c-.83,0-1.56.56-1.76,1.37h0l-.59,2.36h10.14l-.59-2.36c-.2-.8-.93-1.37-1.76-1.37h-5.44Zm11.86,4.65c.67.63,1.09,1.52,1.09,2.51v4.07c0,1.45-1.18,2.62-2.63,2.62h-.87c-1.09,0-2.03-.67-2.42-1.61H7.92c-.39.95-1.33,1.61-2.42,1.61h-.87c-1.45,0-2.63-1.17-2.63-2.62v-4.07c0-.99.42-1.88,1.09-2.51l-.54-.27c-.49-.24-.69-.84-.45-1.33.25-.49.84-.69,1.34-.44l1.32.66.6-2.38h0c.42-1.68,1.94-2.87,3.69-2.87h5.44c1.74,0,3.27,1.18,3.69,2.87l-.97.24.97-.24.62,2.47c.08-.06.17-.11.28-.15l1.32-.47c.52-.19,1.09.08,1.27.6.19.52-.08,1.08-.6,1.27l-.16.06Zm-15.46,1.05c-.81,0-1.46.65-1.46,1.45v4.07c0,.35.29.64.64.64h.87c.34,0,.62-.28.62-.62,0-.55.45-.99,1-.99h9.75c.55,0,1,.44,1,.99,0,.34.28.62.62.62h.87c.35,0,.64-.29.64-.64v-4.07c0-.8-.65-1.45-1.46-1.45H5.45Zm-.06,2.5c0-.55.45-.99,1-.99h1.4c.55,0,1,.44,1,.99s-.45.99-1,.99h-1.4c-.55,0-1-.44-1-.99Zm9.82,0c0-.55.45-.99,1-.99h1.4c.55,0,1,.44,1,.99s-.45.99-1,.99h-1.4c-.55,0-1-.44-1-.99Z"/>',
      }}
    />
  )
)

CarOutline.displayName = 'CarOutline'

export const tags = ['CarOutline', '']
