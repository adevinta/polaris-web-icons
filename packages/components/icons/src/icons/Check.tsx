import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Check = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Check"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M20.2071 5.7929c.3905.3905.3905 1.0237 0 1.4142l-10 10c-.3905.3905-1.0237.3905-1.4142 0l-5-5c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0L9.5 15.0858l9.2929-9.293c.3905-.3904 1.0237-.3904 1.4142 0Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

Check.displayName = 'Check'

export const tags = ['Check', '']
