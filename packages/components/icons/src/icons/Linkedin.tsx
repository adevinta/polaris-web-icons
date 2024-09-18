import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Linkedin = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Linkedin"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6667 4H5.33333C4.59695 4 4 4.59695 4 5.33333V18.6667C4 19.403 4.59695 20 5.33333 20H18.6667C19.403 20 20 19.403 20 18.6667V5.33333C20 4.59695 19.403 4 18.6667 4ZM5.33333 2C3.49238 2 2 3.49238 2 5.33333V18.6667C2 20.5076 3.49238 22 5.33333 22H18.6667C20.5076 22 22 20.5076 22 18.6667V5.33333C22 3.49238 20.5076 2 18.6667 2H5.33333Z"/><path d="M18.262 12.9705V17.6133H15.5703V13.2813C15.5703 12.1928 15.1808 11.4503 14.2068 11.4503C13.4631 11.4503 13.0201 11.9512 12.8257 12.435C12.7546 12.608 12.7364 12.849 12.7364 13.0913V17.6133H10.0434C10.0434 17.6133 10.0799 10.2769 10.0434 9.51618H12.7364V10.6638L12.7188 10.6903H12.7364V10.6638C13.0938 10.1133 13.7324 9.32616 15.1626 9.32616C16.9337 9.32616 18.262 10.4839 18.262 12.9705ZM7.22715 5.61328C6.30664 5.61328 5.70387 6.21731 5.70387 7.01198C5.70387 7.78904 6.28902 8.41131 7.19192 8.41131H7.20954C8.14892 8.41131 8.73219 7.78904 8.73219 7.01198C8.71583 6.21731 8.14892 5.61328 7.22715 5.61328ZM5.86369 17.6133H8.55538V9.51618H5.86369V17.6133Z"/>',
      }}
    />
  )
)

Linkedin.displayName = 'Linkedin'

export const tags = ['Linkedin', '']
