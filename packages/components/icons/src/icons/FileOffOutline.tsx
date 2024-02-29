import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FileOffOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="FileOffOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m6.43,3.7c.05.05.13.08.2.08s.15-.04.19-.1c0,0,.02-.02.03-.03.06-.06.13-.09.22-.09h6.24l6.06,6.02v6.86c0,.07.03.14.08.18l1.55,1.54c.08.08.18.09.28.06.09-.04.16-.14.16-.24v-8.83c0-.27-.11-.53-.3-.73L14.45,1.8c-.2-.2-.46-.3-.73-.3h-6.67c-.63,0-1.23.25-1.67.69-.02.02-.04.04-.06.06-.09.1-.09.26,0,.36l1.1,1.1h0Zm.18-.18l-.21-.15s.02-.02.03-.03l.18.18s.03-.03.05-.05l-.05.05Z"/><path d="m14.17,11.04l1.55,1.54h.66c.43,0,.77-.34.77-.77s-.34-.77-.77-.77h-2.21Zm8.02,9.7L3.27,1.92c-.4-.39-1.06-.39-1.46,0-.4.4-.4,1.05,0,1.45l2.88,2.87v12.19c0,.62.25,1.22.7,1.66.45.44,1.04.69,1.67.69h12c.08,0,.15-.02.24-.03l1.44,1.44c.4.4,1.06.4,1.46,0,.4-.4.4-1.05,0-1.45h0Zm-12.46-8.17h1.33l2.45,2.44h-3.78c-.43,0-.77.34-.77.77s.34.77.77.77h5.33l2.19,2.18H7.05c-.08,0-.15-.03-.22-.09-.06-.06-.09-.13-.09-.21v-10.13l2.79,2.77c-.34.09-.59.37-.59.74,0,.43.34.77.77.77h0Zm.45-5.51l1.55,1.54h.66c.43,0,.77-.34.77-.77s-.34-.77-.77-.77h-2.21Z"/>',
      }}
    />
  )
)

FileOffOutline.displayName = 'FileOffOutline'

export const tags = ['FileOffOutline', '']
