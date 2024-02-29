import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Class = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Class"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.12,16.05c.21,0,.38.16.38.37v2.21c0,.2-.17.37-.38.37H5.88c-.21,0-.38-.17-.38-.37v-2.21c0-.2.17-.37.38-.37h12.24Zm-.38.74H6.26v1.47h11.47v-1.47Zm-1.15-4.42c.21,0,.38.16.38.37v2.21c0,.2-.17.37-.38.37H5.88c-.21,0-.38-.16-.38-.37v-2.21c0-.2.17-.37.38-.37h10.71Zm-.38.74H6.26v1.47h9.94v-1.47Zm-1.15-4.42c.21,0,.38.16.38.37v2.21c0,.2-.17.37-.38.37H5.88c-.21,0-.38-.16-.38-.37v-2.21c0-.2.17-.37.38-.37h9.18Zm-.38.74H6.26v1.47h8.41v-1.47Zm-1.15-4.42c.21,0,.38.16.38.37v2.21c0,.2-.17.37-.38.37h-7.65c-.21,0-.38-.16-.38-.37v-2.21c0-.2.17-.37.38-.37h7.65Zm-.38.74h-6.88v1.47h6.88v-1.47Z"/>',
      }}
    />
  )
)

Class.displayName = 'Class'

export const tags = ['Class', '']
