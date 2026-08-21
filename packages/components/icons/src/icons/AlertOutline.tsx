import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlertOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="AlertOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M12.0002 7.12945C11.4187 7.12945 10.9473 7.60087 10.9473 8.18239L10.9473 13C10.9473 13.5816 11.4187 14.053 12.0002 14.053 12.5817 14.053 13.0532 13.5816 13.0532 13L13.0532 8.18239C13.0532 7.60086 12.5817 7.12945 12.0002 7.12945ZM12.0001 15.0833C11.1969 15.0833 10.5457 15.7345 10.5457 16.5378 10.5457 17.341 11.1969 17.9922 12.0001 17.9922 12.8034 17.9922 13.4546 17.341 13.4546 16.5378 13.4546 15.7345 12.8034 15.0833 12.0001 15.0833Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5228 22 22 17.5229 22 12C22 6.47716 17.5228 2 12 2ZM4.10588 12C4.10588 7.6402 7.6402 4.10588 12 4.10588C16.3598 4.10588 19.8941 7.6402 19.8941 12C19.8941 16.3598 16.3598 19.8941 12 19.8941C7.6402 19.8941 4.10588 16.3598 4.10588 12Z"/>',
      }}
    />
  )
)

AlertOutline.displayName = 'AlertOutline'

export const tags = ['AlertOutline', '']
