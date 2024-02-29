import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Truck = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Truck"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M8.36 15.55c-.26 0-.46.21-.46.46s.21.46.46.46.46-.21.46-.46-.21-.46-.46-.46ZM16.73 15.55c-.26 0-.46.21-.46.46s.21.46.46.46.46-.21.46-.46-.21-.46-.46-.46Z"/><path d="m19.62,12.15l-1.06-.75-1.05-3.16c-.05-.19-.23-.33-.42-.33h-2.81v-1.36c0-.27-.19-.46-.46-.46H5.09c-.68,0-1.19.51-1.19,1.19v8c0,.68.51,1.19,1.19,1.19h1.41c.22.86.98,1.45,1.86,1.45s1.64-.59,1.86-1.45h4.65c.2.84.94,1.45,1.86,1.45s1.64-.59,1.86-1.45h.32c.68,0,1.19-.51,1.19-1.19v-2.18c0-.38-.17-.73-.48-.95Zm-5.34-3.31h2.48l.77,2.35h-.43l.04-.08c.09-.23,0-.5-.2-.6-.06-.02-.12-.04-.19-.04-.18,0-.34.09-.41.23l-.26.49h-1.8v-2.35Zm-5.92,8.16c-.56,0-.99-.43-.99-.99s.43-.99.99-.99.99.43.99.99-.43.99-.99.99Zm1.86-1.46c-.22-.86-.98-1.45-1.86-1.45s-1.64.59-1.86,1.45h-1.41c-.16,0-.26-.1-.26-.26v-8c0-.16.1-.26.26-.26h8.26v8.53h-3.13Zm6.5,1.46c-.56,0-.99-.43-.99-.99s.43-.99.99-.99.99.43.99.99-.43.99-.99.99Zm2.45-1.72c0,.16-.1.26-.26.26h-.32c-.22-.86-.98-1.45-1.86-1.45s-1.66.61-1.86,1.45h-.59v-3.44l3.73-.02,1.06.8c.07.04.1.11.1.21v2.18h0Z"/><path d="m12.36,12.64h-6.54c-.27,0-.46.19-.46.46s.19.46.46.46h6.55c.27,0,.46-.19.46-.46s-.19-.46-.46-.46h-.01Z"/>',
      }}
    />
  )
)

Truck.displayName = 'Truck'

export const tags = ['Truck', '']
