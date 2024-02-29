import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CalculateOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="CalculateOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m6.18,3.5c-.45,0-.73.34-.73.67v15.65c0,.33.29.67.73.67h11.65c.45,0,.73-.34.73-.67V4.17c0-.33-.29-.67-.73-.67H6.18Zm-2.18.67c0-1.24,1.02-2.17,2.18-2.17h11.65c1.16,0,2.18.93,2.18,2.17v15.65c0,1.24-1.02,2.17-2.18,2.17H6.18c-1.16,0-2.18-.93-2.18-2.17V4.17Z"/><path fill-rule="evenodd" d="m6.43,5.27c0-.41.32-.75.72-.75h9.7c.4,0,.72.34.72.75v3.36c0,.41-.32.75-.72.75H7.15c-.4,0-.72-.34-.72-.75v-3.36Zm1.44.75v1.86h8.26v-1.86H7.87Zm-1.41,5.8c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Zm4.04,0c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Zm4.04,0c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Zm-8.09,3.36c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.37-1.38,1.37-1.38-.56-1.38-1.37Zm4.04,0c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.37-1.38,1.37-1.38-.56-1.38-1.37Zm-4.04,3.36c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Zm4.04,0c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Zm4.04-3.36c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.37-1.38,1.37-1.38-.56-1.38-1.37Zm0,3.36c0-.82.68-1.38,1.38-1.38s1.38.56,1.38,1.38-.68,1.38-1.38,1.38-1.38-.56-1.38-1.38Z"/>',
      }}
    />
  )
)

CalculateOutline.displayName = 'CalculateOutline'

export const tags = ['CalculateOutline', '']
