import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Condition = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Condition"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m15.8,4.5c.66,0,1.2.52,1.2,1.16v12.69c0,.64-.54,1.16-1.2,1.16h-6.49c-.66,0-1.2-.52-1.2-1.16V5.66c0-.64.54-1.16,1.2-1.16h6.49Zm.46,12.75h-7.41v1.09c0,.22.17.4.38.44h.07s6.49,0,6.49,0c.25,0,.46-.2.46-.44v-1.09Zm0-9.75h-7.41v9h7.41V7.5Zm-3.44.86c.13.13.15.34.04.49l-.04.05-2.21,2.24c-.15.15-.38.15-.53,0-.13-.13-.15-.34-.04-.49l.04-.05,2.21-2.24c.15-.15.38-.15.53,0Zm-5.43-.86c.19,0,.35.12.38.29v.06s0,2.3,0,2.3c0,.19-.17.35-.38.35-.19,0-.35-.12-.38-.29v-.06s0-2.3,0-2.3c0-.19.17-.35.38-.35Zm3.94.49c.14.14.15.35.05.51l-.05.06-1.43,1.45c-.15.16-.4.16-.56,0-.14-.14-.15-.35-.05-.51l.05-.06,1.43-1.45c.15-.16.4-.16.56,0Zm4.47-2.78h-6.49c-.25,0-.46.2-.46.44v1.09h7.41v-1.09c0-.22-.17-.4-.38-.44h-.07Z"/>',
      }}
    />
  )
)

Condition.displayName = 'Condition'

export const tags = ['Condition', '']
