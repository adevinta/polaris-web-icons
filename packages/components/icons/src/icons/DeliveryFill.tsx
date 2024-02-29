import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="DeliveryFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m10.91,15.76h5.98c1.27,0,2.23-1.04,2.23-2.24v-5.92c0-1.28-1.04-2.24-2.23-2.24h-5.98c-1.27,0-2.23,1.04-2.23,2.24v5.92c-.08,1.28.96,2.24,2.23,2.24Z"/><path d="m14.89,12.48h-1.35c-.56,0-.96-.4-.96-.96,0-.48.4-.96.96-.96h1.35c.56,0,.96.4.96.96-.08.56-.48.96-.96.96Z"/><path d="m21.67,20.25l-1.66-1.67c-.41-.42-1-.67-1.66-.67h-9.63c-.17-.67-.5-1.25-1-1.67-.25-.25-.58-.42-1-.58V4.42c0-.58-.25-1.25-.66-1.67-.5-.5-1.08-.75-1.74-.75h-1.33c-.58,0-1,.5-1,1s.41,1,1,1h1.41c.08,0,.25.08.25.08.08.08.08.17.08.25v11c-.66.17-1.33.5-1.74.92-.58.67-1,1.5-1,2.42,0,.83.33,1.75.91,2.33.66.58,1.49,1,2.41,1s1.74-.25,2.41-.83c.41-.33.75-.83.91-1.33h9.71c.08,0,.17,0,.25.08l1.66,1.67c.41.42,1,.42,1.41,0,.17-.17.33-.42.33-.67-.08-.25-.17-.5-.33-.67Z"/>',
      }}
    />
  )
)

DeliveryFill.displayName = 'DeliveryFill'

export const tags = ['DeliveryFill', '']
