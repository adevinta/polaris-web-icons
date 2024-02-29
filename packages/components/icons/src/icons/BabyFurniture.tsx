import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BabyFurniture = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="BabyFurniture"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m4.5,13.35c0,1.34,1.07,2.42,2.39,2.42h2.12v2.81c-1.03-.1-2.05-.26-3.07-.47l-.98-.2c-.2-.04-.4.09-.45.3-.04.21.09.41.29.45l.98.2c4.23.89,8.6.85,12.82-.11l.44-.1c.2-.05.33-.25.29-.46-.05-.21-.25-.34-.45-.29l-.44.1c-1.01.23-2.02.4-3.04.52v-2.75h1.72c1.32,0,2.39-1.09,2.39-2.42v-3.12h-6.57v-5.25c0-.27-.21-.48-.48-.48h-1.92c-3.2,0-5.82,2.53-6.01,5.73h-.01v3.12Zm10.14,2.42h-4.88v2.87c1.62.12,3.25.11,4.88-.04v-2.83Zm-2.46-10.51v4.97h-6.9c.19-2.78,2.47-4.97,5.26-4.97h1.65Zm-6.92,5.73v2.35c0,.92.73,1.66,1.63,1.66h10.22c.9,0,1.63-.74,1.63-1.66v-2.35H5.25Z"/>',
      }}
    />
  )
)

BabyFurniture.displayName = 'BabyFurniture'

export const tags = ['BabyFurniture', '']
