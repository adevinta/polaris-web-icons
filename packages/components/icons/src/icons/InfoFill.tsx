import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const InfoFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="InfoFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.9844 16.2343C10.9844 16.8159 11.4558 17.2873 12.0374 17.2873C12.6189 17.2873 13.0903 16.8159 13.0903 16.2343L13.0903 11.4167C13.0903 10.8352 12.6189 10.3637 12.0374 10.3637C11.4558 10.3637 10.9844 10.8352 10.9844 11.4167L10.9844 16.2343ZM10.5829 7.87896C10.5829 8.68221 11.234 9.33337 12.0373 9.33337C12.8405 9.33337 13.4917 8.68221 13.4917 7.87896C13.4917 7.07571 12.8405 6.42455 12.0373 6.42455C11.234 6.42455 10.5829 7.07571 10.5829 7.87896Z"/>',
      }}
    />
  )
)

InfoFill.displayName = 'InfoFill'

export const tags = ['InfoFill', '']
