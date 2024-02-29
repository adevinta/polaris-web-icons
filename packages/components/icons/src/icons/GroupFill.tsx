import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const GroupFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="GroupFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m5.13,19.27c-1.93-1.82-3.13-4.4-3.13-7.27C2,6.48,6.48,2,12,2s10,4.48,10,10c0,2.86-1.2,5.44-3.13,7.27h0s-.2.18-.2.18c-1.77,1.59-4.11,2.56-6.68,2.56s-4.9-.97-6.68-2.55l-.2-.17h0Zm4.58-11.02c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25.56-1.25,1.25-1.25Zm0,3.75c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm-.13.87c-2.02,0-3.76,1.38-4.23,3.35-.08.33.11.67.43.76.32.08.64-.12.72-.45.34-1.42,1.6-2.41,3.08-2.41s2.74.99,3.08,2.41c.07.28.31.47.57.47.05,0,.1,0,.15-.02.32-.08.51-.42.43-.76-.47-1.97-2.21-3.35-4.23-3.35Zm5.55-4.1c.59,0,1.08.48,1.08,1.08s-.48,1.08-1.08,1.08-1.08-.48-1.08-1.08.48-1.08,1.08-1.08Zm0,3.23c1.19,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15Zm3.53,3.65s0,0,0-.01c-.36-1.52-1.6-2.62-3.1-2.84-.18-.03-.36-.05-.54-.05-.01,0-.03,0-.04,0-.19,0-.39.02-.57.05-.08.01-.16.04-.24.06-.11.03-.23.05-.34.09-.09.03-.18.07-.27.11-.09.04-.19.08-.28.13-.09.05-.17.1-.25.15-.07.04-.13.08-.19.13.27.23.5.51.71.79.43-.27.94-.44,1.48-.44,1.27,0,2.36.85,2.65,2.07.05.21.22.36.41.39h.08c.16,0,.31-.08.4-.21.05-.06.08-.14.09-.21,0,0,0,0,0,0,.01-.07,0-.14,0-.22Z"/>',
      }}
    />
  )
)

GroupFill.displayName = 'GroupFill'

export const tags = ['GroupFill', '']
