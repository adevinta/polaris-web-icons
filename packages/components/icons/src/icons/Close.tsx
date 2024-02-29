import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Close = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Close"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M4.9322 17.6536c-.3906.3906-.3906 1.0237 0 1.4143.3905.3905 1.0237.3905 1.4142 0L12 13.4142l5.6586 5.6586c.3905.3906 1.0237.3906 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L13.4142 12l5.662-5.662c.3905-.3904.3905-1.0236 0-1.4141-.3906-.3905-1.0237-.3905-1.4143 0L12 10.5858l-5.653-5.653c-.3906-.3906-1.0238-.3906-1.4143 0-.3905.3905-.3905 1.0236 0 1.4142L10.5858 12l-5.6536 5.6536Z"/>',
      }}
    />
  )
)

Close.displayName = 'Close'

export const tags = ['Close', '']
