import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const StopFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="StopFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM14.8333 15.5833C14.8333 16 14.5 16.3333 14.0833 16.3333C13.6667 16.3333 13.3333 16 13.3333 15.5833V8.41667C13.3333 8 13.6667 7.66667 14.0833 7.66667C14.5 7.66667 14.8333 8 14.8333 8.41667V15.5833ZM10.5833 8.41667V15.5833C10.5833 16 10.25 16.3333 9.83333 16.3333C9.41667 16.3333 9.08333 16 9.08333 15.5833V8.41667C9.08333 8 9.41667 7.66667 9.83333 7.66667C10.25 7.66667 10.5833 8 10.5833 8.41667Z"/>',
      }}
    />
  )
)

StopFill.displayName = 'StopFill'

export const tags = ['StopFill', '']
