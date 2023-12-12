import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Shower = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Shower"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m10.92,4.5c1.06-.02,2.08.4,2.84,1.17.76.76,1.18,1.78,1.18,2.85,1.15.17,2.05,1.17,2.06,2.39,0,.1-.04.2-.11.27-.07.07-.16.11-.26.11h-4.07c-.1,0-.19-.04-.26-.11-.07-.07-.11-.17-.11-.27.01-1.2.88-2.19,2.01-2.38,0-.88-.35-1.7-.96-2.32-.62-.63-1.46-.97-2.31-.95-1.76.02-3.19,1.52-3.19,3.35v4.61c.15-.07.31-.1.48-.1.67,0,1.22.56,1.22,1.24s-.55,1.24-1.22,1.24c-.17,0-.34-.04-.48-.1v3.64c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-10.53c0-2.23,1.76-4.07,3.92-4.1Zm3.68,9.63c.2,0,.37.17.37.38v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.38.37-.38Zm-6.38-.28c-.27,0-.48.22-.48.49h0c0,.28.22.5.48.5s.48-.22.48-.49-.22-.49-.48-.49Zm7.01-1.01c.2,0,.37.17.37.38v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.38.37-.38Zm-1.27,0c.2,0,.37.17.37.38v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.38.37-.38Zm.63-1.28c.2,0,.37.17.37.37v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.37.37-.37Zm-1.27,0c.2,0,.37.17.37.38v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.38.37-.38Zm2.53,0c.2,0,.37.17.37.38v.46c0,.21-.16.38-.37.38s-.37-.17-.37-.38v-.46c0-.21.16-.38.37-.38Zm-1.27-2.33c-.78,0-1.44.56-1.62,1.3h3.24c-.18-.75-.84-1.3-1.62-1.3Z"/>',
      }}
    />
  )
)

Shower.displayName = 'Shower'

export const tags = ['Shower', '']
