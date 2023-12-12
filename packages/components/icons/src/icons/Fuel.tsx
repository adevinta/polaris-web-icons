import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Fuel = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Fuel"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12.76,3.5c1.9,0,3.44,1.48,3.44,3.31v.17c0-.21.17-.39.38-.39.19,0,.34.14.38.32v.07s0,1.55,0,1.55c0,.21-.17.39-.38.39-.19,0-.34-.14-.38-.32v-.07s0,5.82,0,5.82c.92-.05,1.39-.3,1.51-.69l.02-.07v-6.17s-.17.04-.17.04c-.18.04-.37-.06-.44-.22l-.02-.06c-.04-.18.06-.35.23-.42l.07-.02.63-.13c.22-.05.42.1.46.3v.06s0,3.31,0,3.31v3.38c-.16.89-.96,1.36-2.29,1.43v3.15c.44.14.76.59.76,1.11,0,.64-.48,1.16-1.08,1.16H6.58c-.59,0-1.08-.52-1.08-1.16,0-.52.32-.97.76-1.11V6.81c0-1.83,1.54-3.31,3.44-3.31h3.06Zm3.13,15.45H6.58c-.2,0-.36.17-.36.39s.16.39.36.39h9.32c.2,0,.36-.17.36-.39s-.16-.39-.36-.39Zm-3.13-14.68h-3.06c-1.48,0-2.68,1.15-2.68,2.56v11.35h8.41V6.83c0-1.37-1.12-2.49-2.53-2.56h-.15Zm.81,1.55c.18,0,.33.17.33.39v3.09c0,.21-.15.39-.33.39h-4.68c-.18,0-.33-.17-.33-.39v-3.09c0-.21.15-.39.33-.39h4.68Zm-.43.77h-3.82v2.32h3.82v-2.32Z"/>',
      }}
    />
  )
)

Fuel.displayName = 'Fuel'

export const tags = ['Fuel', '']
