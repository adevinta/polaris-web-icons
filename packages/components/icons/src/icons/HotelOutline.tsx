import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HotelOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="HotelOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m2.95,5.5c-.26,0-.49.09-.68.26-.18.18-.27.4-.27.65v11.18c0,.25.09.47.27.65h0c.18.18.41.26.68.26s.49-.08.68-.26h0c.18-.18.27-.4.27-.65v-1.77h16.21v1.77c0,.25.09.47.27.65h0c.18.18.41.26.68.26s.49-.08.68-.26h0c.18-.18.27-.4.27-.65v-6.93c0-.93-.34-1.73-1.02-2.38-.68-.66-1.51-.99-2.48-.99h-5.8c-.45,0-.84.16-1.16.46-.32.31-.48.68-.48,1.12v5.12H3.89v-7.58c0-.25-.09-.47-.27-.65-.18-.18-.41-.26-.68-.26Zm10,8.49v-4.88h5.55c.44,0,.82.15,1.14.45.32.31.47.67.47,1.09v3.34h-7.16Z"/><path fill-rule="evenodd" d="m7.36,8.14c-.73,0-1.35.24-1.86.73-.51.49-.76,1.09-.76,1.79s.25,1.3.76,1.79c.5.49,1.13.73,1.86.73s1.35-.24,1.86-.73c.51-.49.76-1.09.76-1.79s-.25-1.3-.76-1.79c-.5-.49-1.13-.73-1.86-.73Zm-.52,2.02c.14-.13.3-.2.52-.2s.38.07.52.2c.14.13.21.29.21.5s-.07.37-.21.5c-.14.13-.3.2-.52.2s-.38-.07-.52-.2c-.14-.13-.21-.29-.21-.5s.07-.37.21-.5Z"/>',
      }}
    />
  )
)

HotelOutline.displayName = 'HotelOutline'

export const tags = ['HotelOutline', '']
