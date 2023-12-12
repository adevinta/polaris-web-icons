import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Sort = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Sort"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m8.46,4.97c0-.21-.17-.38-.37-.38s-.38.17-.38.38v13.16l-1.75-1.75c-.15-.15-.38-.15-.53,0-.15.15-.15.38,0,.53l2.39,2.39c.15.15.38.15.53,0l2.39-2.39c.15-.15.15-.38,0-.53-.15-.15-.38-.15-.53,0l-1.75,1.75V4.97Z"/><path fill-rule="evenodd" d="m18.68,7.23c0,.21-.17.38-.38.38h-7.58c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h7.58c.21,0,.38.17.38.38v2.25Zm-7.58-.38h6.83v-1.5h-6.83v1.5Zm6.08,4.13c0,.21-.17.38-.38.38h-6.08c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h6.08c.21,0,.38.17.38.38v2.25Zm-6.08-.38h5.33v-1.5h-5.33v1.5Zm4.58,4.12c0,.21-.17.38-.38.38h-4.58c-.21,0-.38-.17-.38-.38v-2.25c0-.21.17-.38.38-.38h4.58c.21,0,.38.17.38.38v2.25Zm-4.58-.38h3.83v-1.5h-3.83v1.5Z"/>',
      }}
    />
  )
)

Sort.displayName = 'Sort'

export const tags = ['Sort', '']
