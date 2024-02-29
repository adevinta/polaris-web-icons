import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Bump = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Bump"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M11.6112 5.1723c.2048-.2267.563-.2248.7641.0053.923 1.0561 3.206 3.6203 4.9043 5.5245l.2006.2249.6564.7357.2887.3235c.309.346.019.8875-.4409.8266l-2.9707-.3931a.5001.5001 0 0 0-.559.4144l-.9472 5.7475a.5.5 0 0 1-.4933.4187h-2.2354a.5002.5002 0 0 1-.4938-.4212l-.9154-5.7364a.5.5 0 0 0-.5593-.4169l-2.9138.3856c-.4612.061-.7485-.4857-.4366-.8309l6.1513-6.8082Zm-1.484-1.3408c1.0027-1.1098 2.7599-1.1076 3.754.03 1.1478 1.3134 4.431 4.9947 6.0361 6.7928 1.5641 1.752.074 4.4415-2.1953 4.1413l-1.5302-.2025-.7109 4.3137c-.199 1.2075-1.2429 2.0935-2.4667 2.0935h-2.2354c-1.2286 0-2.2751-.8928-2.4688-2.1061l-.6852-4.2941-1.466.194c-2.306.3051-3.7423-2.4285-2.1829-4.1544l6.1513-6.8082Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

Bump.displayName = 'Bump'

export const tags = ['Bump', '']
