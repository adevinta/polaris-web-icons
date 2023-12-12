import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Bath = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Bath"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.39,13.43H5.61c-.2,0-.36-.16-.36-.36s.16-.36.36-.36h12.77c.2,0,.36.16.36.36s-.16.36-.36.36Zm-1.36,3.2c-.11.38-.46.64-.86.64h-8.1c-.53,0-1.01-.35-1.15-.86l-.63-2.25h11.43l-.69,2.47Zm-1.51-8.31h-2.07c0-.55.47-1,1.03-1h.01c.56,0,1.02.45,1.03,1Zm3.98,4.75c0-.55-.42-1.01-.96-1.08v-4.83c0-1.19-.99-2.17-2.21-2.17-1.02,0-1.87.69-2.12,1.61-.84.13-1.49.85-1.5,1.71,0,.2.08.39.22.52.14.14.33.22.53.22h2.07c.2,0,.39-.08.53-.22.14-.14.22-.33.22-.52,0-.79-.56-1.45-1.3-1.66.21-.54.74-.92,1.36-.92.8,0,1.46.64,1.46,1.43v4.81H5.61c-.61,0-1.11.49-1.11,1.09,0,.57.44,1.03,1,1.08l.69,2.46c.23.81.97,1.37,1.82,1.4l-.23.46c-.09.18-.02.4.17.49.05.03.11.04.17.04.14,0,.27-.07.34-.2l.4-.78h6.62l.4.78c.07.13.2.2.34.2.06,0,.11-.01.17-.04.19-.09.26-.31.17-.49l-.24-.46c.68-.06,1.27-.52,1.45-1.17l.75-2.67c.56-.06,1-.52,1-1.08Z"/>',
      }}
    />
  )
)

Bath.displayName = 'Bath'

export const tags = ['Bath', '']
