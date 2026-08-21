import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MouseComputerCriteria = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="MouseComputerCriteria"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M12 19.5C9.24 19.5 7 17.26 7 14.5V9.5C7 6.74 9.24 4.5 12 4.5C14.76 4.5 17 6.74 17 9.5V14.5C17 17.26 14.76 19.5 12 19.5ZM12 5.25C9.66 5.25 7.75 7.16 7.75 9.5V14.5C7.75 16.84 9.66 18.75 12 18.75C14.34 18.75 16.25 16.84 16.25 14.5V9.5C16.25 7.16 14.34 5.25 12 5.25Z"/><path d="M12 10.88C11.79 10.88 11.62 10.71 11.62 10.5V7.5C11.62 7.29 11.79 7.12 12 7.12C12.21 7.12 12.38 7.29 12.38 7.5V10.5C12.38 10.71 12.21 10.88 12 10.88Z"/>',
      }}
    />
  )
)

MouseComputerCriteria.displayName = 'MouseComputerCriteria'

export const tags = ['MouseComputerCriteria', '']
