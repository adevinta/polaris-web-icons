import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Check = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Check"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2071 5.79289C20.5976 6.18342 20.5976 6.81658 20.2071 7.20711L10.2071 17.2071C9.81658 17.5976 9.18342 17.5976 8.79289 17.2071L3.79289 12.2071C3.40237 11.8166 3.40237 11.1834 3.79289 10.7929C4.18342 10.4024 4.81658 10.4024 5.20711 10.7929L9.5 15.0858L18.7929 5.79289C19.1834 5.40237 19.8166 5.40237 20.2071 5.79289Z"/>',
      }}
    />
  )
)

Check.displayName = 'Check'

export const tags = ['Check', '']
