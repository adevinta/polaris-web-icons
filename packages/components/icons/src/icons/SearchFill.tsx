import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SearchFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SearchFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M10.5006 3.9512c-3.6171 0-6.5494 2.9322-6.5494 6.5494 0 3.617 2.9323 6.5493 6.5494 6.5493 3.6172 0 6.5494-2.9323 6.5494-6.5493 0-3.6172-2.9322-6.5494-6.5494-6.5494ZM2 10.5006C2 5.8058 5.8059 2 10.5006 2c4.6948 0 8.5007 3.8058 8.5007 8.5006 0 4.6947-3.8059 8.5005-8.5007 8.5005C5.8059 19.0011 2 15.1953 2 10.5006Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.1281 15.1282c.381-.381.9987-.381 1.3797 0l5.2064 5.2063c.3811.381.3811.9988 0 1.3798-.381.381-.9987.381-1.3797 0l-5.2064-5.2064c-.381-.381-.381-.9987 0-1.3797Z" clip-rule="evenodd"/><path d="M15.75 10.5c0 2.8995-2.3505 5.25-5.25 5.25s-5.25-2.3505-5.25-5.25 2.3505-5.25 5.25-5.25 5.25 2.3505 5.25 5.25Z"/>',
      }}
    />
  )
)

SearchFill.displayName = 'SearchFill'

export const tags = ['SearchFill', '']
