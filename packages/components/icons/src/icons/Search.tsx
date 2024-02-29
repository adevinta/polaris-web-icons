import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Search = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Search"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m10.5,3.95c-3.62,0-6.55,2.93-6.55,6.55s2.93,6.55,6.55,6.55,6.55-2.93,6.55-6.55-2.93-6.55-6.55-6.55ZM2,10.5C2,5.81,5.81,2,10.5,2s8.5,3.81,8.5,8.5-3.81,8.5-8.5,8.5S2,15.2,2,10.5Z"/><path fill-rule="evenodd" d="m15.13,15.13c.38-.38,1-.38,1.38,0l5.21,5.21c.38.38.38,1,0,1.38-.38.38-1,.38-1.38,0l-5.21-5.21c-.38-.38-.38-1,0-1.38Z"/>',
      }}
    />
  )
)

Search.displayName = 'Search'

export const tags = ['Search', '']
