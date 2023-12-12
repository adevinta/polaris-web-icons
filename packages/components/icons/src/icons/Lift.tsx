import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Lift = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Lift"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.12,4.5c.21,0,.38.17.38.38v14.25c0,.21-.17.38-.38.38h-2.6c-.21,0-.38-.17-.38-.38v-.29H7.85v.29c0,.21-.17.38-.38.38h-2.6c-.21,0-.38-.17-.38-.38V4.87c0-.21.17-.38.38-.38h14.25Zm-.38.75H5.25v13.5h1.85v-10.64c0-.21.17-.38.38-.38h9.05c.21,0,.38.17.38.38v10.64h1.85V5.25Zm-2.6,3.24h-3.77v9.6h3.77v-9.6Zm-4.52,0h-3.77v9.6h3.77v-9.6Zm6.18,3.73c.21,0,.42.21.42.42s-.21.42-.42.42-.42-.21-.42-.42.21-.42.42-.42Zm0-1.3c.21,0,.42.21.42.42s-.21.42-.42.42-.42-.21-.42-.42.21-.42.42-.42Zm-8.04-5.05c.14-.15.41-.15.55,0l.76.82c.14.15.13.39-.02.53-.15.14-.39.13-.53-.02l-.48-.52-.48.52c-.07.08-.17.12-.28.12-.09,0-.18-.03-.26-.1-.15-.14-.16-.38-.02-.53l.76-.82Zm4.63,0c.14-.15.38-.16.53-.02.15.14.16.38.02.53l-.76.82c-.07.08-.17.12-.27.12s-.2-.04-.28-.12l-.76-.82c-.14-.15-.13-.39.02-.53.15-.14.39-.13.53.02l.48.52.48-.52Z"/>',
      }}
    />
  )
)

Lift.displayName = 'Lift'

export const tags = ['Lift', '']
