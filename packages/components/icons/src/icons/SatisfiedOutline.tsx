import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SatisfiedOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SatisfiedOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m8.39,13.12c-.15-.53-.7-.84-1.23-.7-.53.15-.84.7-.7,1.23.84,3.04,4.17,4.86,7.18,4.02.02,0,.05-.01.07-.02,1.79-.65,3.3-2.13,3.81-4,.15-.53-.17-1.08-.7-1.23-.53-.15-1.08.17-1.23.7-.32,1.16-1.29,2.17-2.52,2.63-1.96.52-4.15-.7-4.69-2.64Zm-1.43-5.57c.45-.45,1.05-.7,1.69-.7s1.24.25,1.69.7.7,1.05.7,1.69c0,.55-.45,1-1,1s-1-.45-1-1c0-.1-.04-.2-.11-.27-.07-.07-.17-.11-.27-.11s-.2.04-.27.11-.11.17-.11.27c0,.55-.45,1-1,1s-1-.45-1-1c0-.63.25-1.24.7-1.69Zm8.38-.7c-.63,0-1.24.25-1.69.7s-.7,1.05-.7,1.69c0,.55.45,1,1,1s1-.45,1-1c0-.1.04-.2.11-.27.07-.07.17-.11.27-.11s.2.04.27.11c.07.07.11.17.11.27,0,.55.45,1,1,1s1-.45,1-1c0-.63-.25-1.24-.7-1.69-.45-.45-1.05-.7-1.69-.7Z"/><path fill-rule="evenodd" d="m12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2ZM4,12c0-4.42,3.58-8,8-8s8,3.58,8,8-3.58,8-8,8-8-3.58-8-8Z"/>',
      }}
    />
  )
)

SatisfiedOutline.displayName = 'SatisfiedOutline'

export const tags = ['SatisfiedOutline', '']
