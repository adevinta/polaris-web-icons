import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TopAd = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="TopAd"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m9.9497 15.435-3.889 3.8891c-.3906.3906-1.0237.3906-1.4143 0-.3905-.3905-.3905-1.0237 0-1.4142l3.8891-3.8891 1.4142 1.4142Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.3953 3.8302c.7102-1.026 2.1762-1.1582 3.0586-.2758l3.9623 3.9623c.8823.8823.7501 2.3483-.2758 3.0586l-3.3206 2.2988-1.1927 4.0554c-.4284 1.4565-2.2595 1.9234-3.333.8499l-6.103-6.103c-1.0734-1.0734-.6065-2.9045.85-3.333l4.0553-1.1927 2.2989-3.3205Zm5.6067 5.1007-3.9623-3.9623-2.2989 3.3205a1.9997 1.9997 0 0 1-1.0801.7804l-4.0553 1.1927 6.1029 6.103 1.1928-4.0554a1.9998 1.9998 0 0 1 .7803-1.08l3.3206-2.2989Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

TopAd.displayName = 'TopAd'

export const tags = ['TopAd', '']
