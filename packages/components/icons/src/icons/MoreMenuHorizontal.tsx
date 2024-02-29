import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MoreMenuHorizontal = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="MoreMenuHorizontal"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m19.69,14.25c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Zm-7.69,0c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Zm-7.69,0c1.27,0,2.31-1.01,2.31-2.25s-1.03-2.25-2.31-2.25-2.31,1.01-2.31,2.25,1.03,2.25,2.31,2.25Z"/>',
      }}
    />
  )
)

MoreMenuHorizontal.displayName = 'MoreMenuHorizontal'

export const tags = ['MoreMenuHorizontal', '']
