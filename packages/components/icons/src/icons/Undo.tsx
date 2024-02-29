import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Undo = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Undo"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M6.2929 4.2929c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142L6.4142 7H15.2c3.2 0 5.8 2.6 5.8 5.8 0 3.1-2.4 6.1-5.5 6.2H9c-.6 0-1-.4-1-1s.4-1 1-1h6.5c2 0 3.5-2.3 3.5-4.2 0-1.9-1.5-3.8-3.5-3.8H6.4142l1.293 1.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3Z"/>',
      }}
    />
  )
)

Undo.displayName = 'Undo'

export const tags = ['Undo', '']
