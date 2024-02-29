import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HandDelivered = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="HandDelivered"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m3.5,5.97c0,1.26,1.02,2.27,2.27,2.27s2.27-1.02,2.27-2.27-1.02-2.27-2.27-2.27-2.27,1.02-2.27,2.27Zm.75,0c0,.84.68,1.52,1.52,1.52s1.52-.68,1.52-1.52-.68-1.52-1.52-1.52-1.52.68-1.52,1.52Z"/><path d="m7.08,8.93c.56,0,1.1.25,1.45.69l.94,1.16c.21.26.53.41.87.41h.9c.21,0,.38.17.38.38v1.92c0,.21-.17.38-.38.38h-1.6c-.46,0-.91-.17-1.26-.48l-.48-.44.26,6.97c0,.21-.15.38-.36.39-.21,0-.38-.15-.39-.36l-.3-7.86c0-.15.08-.29.22-.35.14-.06.3-.04.41.06l1.14,1.03c.21.19.48.29.75.29h1.23v-1.17h-.53c-.56,0-1.1-.25-1.45-.69l-.94-1.16c-.21-.26-.53-.41-.87-.41h-2.99c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h2.99Zm8.39.69c.36-.44.89-.69,1.45-.69h2.99c.21,0,.38.17.38.38s-.17.38-.38.38h-2.99c-.34,0-.66.15-.87.41l-.94,1.16c-.36.44-.89.69-1.45.69h-.53v1.17h1.23c.28,0,.55-.1.75-.29l1.14-1.03c.11-.1.27-.13.41-.06.14.06.22.2.22.35l-.3,7.86c0,.21-.18.37-.39.36-.21,0-.37-.18-.36-.39l.26-6.97-.48.44c-.34.31-.79.48-1.26.48h-1.6c-.21,0-.38-.17-.38-.38v-1.92c0-.21.17-.38.38-.38h.9c.34,0,.66-.15.87-.41l.94-1.16Z"/><path fill-rule="evenodd" d="m20.5,5.97c0,1.26-1.02,2.27-2.27,2.27s-2.27-1.02-2.27-2.27,1.02-2.27,2.27-2.27,2.27,1.02,2.27,2.27Zm-.75,0c0,.84-.68,1.52-1.52,1.52s-1.52-.68-1.52-1.52.68-1.52,1.52-1.52,1.52.68,1.52,1.52Z"/>',
      }}
    />
  )
)

HandDelivered.displayName = 'HandDelivered'

export const tags = ['HandDelivered', '']
