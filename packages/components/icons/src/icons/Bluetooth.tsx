import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Bluetooth = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Bluetooth"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m10.79,17.12c-.09,0-.17-.03-.26-.07-.12-.09-.2-.23-.2-.36v-3.62l-1.65,1.59c-.08.08-.2.12-.32.12s-.24-.04-.32-.12c-.08-.08-.13-.19-.13-.31s.05-.23.13-.31l2.11-2.02-2.11-2.02c-.08-.08-.13-.19-.13-.31s.05-.23.13-.31c.08-.08.2-.13.32-.13s.24.05.32.13l1.65,1.59v-3.62c0-.14.06-.27.18-.36.08-.05.17-.08.26-.08.05,0,.1,0,.15.03l4.85,1.75c.16.05.28.2.3.36.02.17-.06.34-.21.42l-4.24,2.55,4.24,2.55c.13.09.22.25.21.4-.03.17-.13.3-.29.36l-4.85,1.75s-.1.03-.15.03h0Zm.45-1.07l3.4-1.22-3.4-2.04v3.27Zm0-4.82l3.4-2.04-3.4-1.22v3.27Z"/><path d="m12,20c-3.58,0-6.5-2.8-6.5-6.25v-3.5c0-3.45,2.92-6.25,6.5-6.25s6.5,2.8,6.5,6.25v3.5c0,3.45-2.92,6.25-6.5,6.25Zm0-15.14c-3.09,0-5.61,2.43-5.61,5.4v3.5c0,2.97,2.52,5.39,5.61,5.39s5.61-2.42,5.61-5.39v-3.51c0-2.97-2.52-5.39-5.61-5.39Z"/>',
      }}
    />
  )
)

Bluetooth.displayName = 'Bluetooth'

export const tags = ['Bluetooth', '']
