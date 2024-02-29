import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BikeSize = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="BikeSize"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m8.52,6.77c.17,0,.31.14.31.3,0,.17-.14.3-.31.3h-.47l.3.49h5.72v-1.61c0-.09.05-.18.12-.24.08-.06.18-.08.27-.05l1.24.34c.08.02.14.07.18.14.04.07.05.15.03.23-.05.16-.22.25-.38.2l-.82-.23v3.04c.09,0,.18.02.27.04,1.15.24,1.98,1.23,1.96,2.38-.01,1.15-.86,2.12-2.01,2.34-.15.03-.31.04-.46.04-.5,0-.98-.15-1.39-.42-.97-.65-1.34-1.87-.88-2.93.34-.77,1.06-1.3,1.87-1.43v-.8s-3.27,3.46-3.27,3.46c-.05.05-.12.09-.19.09h-.06s-2.13,0-2.13,0c-.08.49-.32.96-.69,1.31-.46.45-1.09.7-1.75.7-1.36,0-2.47-1.08-2.47-2.4s1.11-2.4,2.47-2.4c.3,0,.59.05.85.15l.99-1.66-.48-.79h-.25c-.17,0-.31-.13-.31-.3s.14-.3.31-.3h1.43Zm-2.55,3.51c-1.02,0-1.85.81-1.85,1.8s.83,1.8,1.85,1.8c.89,0,1.63-.61,1.81-1.42h-1.99c-.11,0-.21-.06-.27-.15-.06-.09-.06-.21,0-.3l.98-1.65c-.17-.05-.35-.07-.53-.07h0Zm8.09,0h.05c-.83.13-1.46.8-1.53,1.62-.07.82.44,1.58,1.23,1.85.8.27,1.68-.01,2.15-.69.25-.36.36-.79.31-1.22l-.02-.13c-.16-.74-.79-1.3-1.55-1.41v1.43c0,.09-.03.17-.1.23s-.15.09-.24.08c-.17,0-.31-.13-.31-.3v-1.46Zm-7,.35l-.74,1.23h1.49c-.07-.51-.35-.95-.75-1.23Zm1.11-1.86l-.8,1.33c.59.4.99,1.03,1.06,1.76h1.57s-1.83-3.09-1.83-3.09Zm5.5-.31h-4.98s.98,1.66.98,1.66l.91,1.53,3.09-3.2Z"/><path d="m18.95,7.59c.11-.11.3-.11.42,0l1.03,1.03c.14.14.14.38,0,.52-.14.14-.38.14-.52,0l-.35-.35v7.91h0c0,.2-.15.36-.33.37-.01,0-.02,0-.04,0h0s-13.42,0-13.42,0l.47.3c.17.11.22.34.11.51-.11.17-.34.22-.51.11l-1.62-1.04c-.18-.12-.18-.38,0-.49l1.62-1.04c.17-.11.4-.06.51.11.11.17.06.4-.11.51l-.47.3h13.06v-7.55l-.35.35c-.14.14-.38.14-.52,0-.14-.14-.14-.38,0-.52l1.03-1.03Z"/>',
      }}
    />
  )
)

BikeSize.displayName = 'BikeSize'

export const tags = ['BikeSize', '']
