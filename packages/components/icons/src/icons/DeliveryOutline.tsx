import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="DeliveryOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.32,16.33h6.25c1.31,0,2.37-1.05,2.37-2.35v-6.19c0-1.3-1.06-2.35-2.37-2.35h-6.25c-1.31,0-2.37,1.05-2.37,2.35v6.19c0,1.3,1.06,2.35,2.37,2.35Zm-.4-8.54c0-.22.18-.4.4-.4h6.25c.23,0,.4.18.4.4v6.19c0,.22-.18.4-.4.4h-6.25c-.23,0-.4-.18-.4-.4v-6.19Z"/><path fill-rule="evenodd" d="m21.73,20.18l-1.65-1.67h0c-.44-.44-1.03-.69-1.66-.69h-9.68c-.16-.65-.51-1.25-1.03-1.71-.28-.25-.61-.44-.96-.59V4.36c0-.62-.25-1.22-.69-1.67-.44-.44-1.05-.69-1.68-.69h-1.38c-.55,0-.99.44-.99.98s.44.97.98.97h1.38c.11,0,.21.04.28.12.08.07.12.17.12.28v10.98c-.68.13-1.3.46-1.79.96-.61.62-.95,1.47-.95,2.34s.34,1.71.95,2.34c.61.62,1.44,1,2.33,1.02.88.03,1.73-.27,2.39-.86.42-.37.72-.84.91-1.36h9.79c.1,0,.2.04.28.12l1.64,1.66c.38.38,1,.39,1.39,0,.38-.37.39-.99,0-1.38h.02Zm-16.36-.13c-.37-.02-.72-.17-.98-.43-.26-.27-.4-.62-.4-.98s.14-.72.4-.98.61-.42.98-.43c.37-.02.73.12,1.01.36.28.24.44.58.47.95v.22c-.03.37-.2.7-.47.95-.28.24-.63.37-1.01.36Z"/><path fill-rule="evenodd" d="m14.09,12.9h1.38c.54,0,.98-.43.98-.97s-.44-.97-.98-.97h-1.38c-.54,0-.98.43-.98.97s.44.97.98.97Z"/>',
      }}
    />
  )
)

DeliveryOutline.displayName = 'DeliveryOutline'

export const tags = ['DeliveryOutline', '']
