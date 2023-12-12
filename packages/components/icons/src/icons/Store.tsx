import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Store = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Store"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m16.5,5.5c.39,0,.74.23.91.57l2.05,4.25c.03.06.04.12.04.18,0,.72-.37,1.36-.94,1.74v5.5h.39c.21,0,.38.17.38.38s-.17.38-.38.38H5.05c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.39v-5.5c-.57-.38-.94-1.01-.94-1.74,0-.06,0-.12.04-.18l2.05-4.25c.17-.35.53-.57.91-.57h9Zm-.89,8.53h-2.11v3.72h2.11v-3.72Zm-.02-2.38c-.38.58-1.04.96-1.79.96s-1.41-.38-1.79-.96c-.38.58-1.04.96-1.79.96s-1.41-.38-1.79-.96c-.38.58-1.04.96-1.79.96-.15,0-.3-.02-.45-.05v5.19h6.55v-4.1c0-.21.17-.38.38-.38h2.86c.21,0,.38.17.38.38v4.1h1.46v-5.19c-.14.03-.29.05-.45.05-.75,0-1.41-.38-1.79-.96Zm-4.27,1.63c.21,0,.38.17.38.38v2.66c0,.21-.17.38-.38.38h-3.68c-.21,0-.38-.17-.38-.38v-2.66c0-.21.17-.38.38-.38h3.68Zm-.38.75h-2.93v1.91h2.93v-1.91Zm7.76-3.16h-2.65c.16.57.69.99,1.33.99s1.16-.42,1.33-.99Zm-3.58,0h-2.65c.16.57.69.99,1.33.99s1.16-.42,1.33-.99Zm-3.58,0h-2.65c.16.57.69.99,1.33.99s1.16-.42,1.33-.99Zm-3.58,0h-2.66c.16.57.69.99,1.33.99s1.16-.42,1.33-.99Zm.95-4.61h-1.41c-.1,0-.19.06-.24.15l-1.79,3.71h2.68l.77-3.86Zm7.58,0h-1.42l.76,3.86h2.69l-1.79-3.71c-.04-.09-.14-.15-.24-.15Zm-4.87,0h-1.95l-.77,3.86h2.71v-3.86Zm2.68,0h-1.93v3.86h2.7l-.77-3.86Z"/>',
      }}
    />
  )
)

Store.displayName = 'Store'

export const tags = ['Store', '']
