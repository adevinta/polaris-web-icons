import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="HomeFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m21.74,11.5L12.49,2.25c-.33-.33-.75-.33-1.08,0L2.25,11.5c-.33.33-.33.75,0,1.08.33.33.75.33,1.08,0l1.33-1.42v10c0,.33.25.67.58.75.08,0,.25.08.33.08h12.83c.08,0,.25,0,.33-.08.42,0,.75-.33.75-.75v-9.92l1.25,1.25c.33.33.75.33,1.08,0,.25-.25.25-.75-.08-1Z"/>',
      }}
    />
  )
)

HomeFill.displayName = 'HomeFill'

export const tags = ['HomeFill', '']
