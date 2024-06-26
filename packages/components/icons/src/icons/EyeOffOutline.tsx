import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EyeOffOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="EyeOffOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M7.6162 18.3838C8.8702 19.0578 10.3303 19.5 12 19.5c5.2505 0 8.4288-4.3726 9.6435-6.5758a1.912 1.912 0 0 0 0-1.8484c-.5591-1.0141-1.5343-2.4879-2.936-3.7833l-1.4151 1.4151c1.1721 1.064 2.0345 2.3175 2.5767 3.2924C18.7 14.1022 16.0415 17.5 12 17.5c-1.0574 0-2.0201-.2326-2.8863-.6137l-1.4975 1.4975Z"/><path d="M10.3535 15.6465A3.9854 3.9854 0 0 0 12 16c2.2091 0 4-1.7909 4-4a3.9858 3.9858 0 0 0-.3535-1.6465L14 12c0 1.1046-.8954 2-2 2l-1.6465 1.6465ZM12.4032 8.02l-4.3831 4.3832A4.0481 4.0481 0 0 1 8 12c0-2.2091 1.7909-4 4-4 .1361 0 .2706.0068.4032.02Z"/><path d="M13.7128 6.7104A7.032 7.032 0 0 0 12 6.5c-4.0415 0-6.7 3.3978-7.8691 5.5.4125.7418 1.0105 1.6449 1.7892 2.5031l-1.4143 1.4143c-.9869-1.074-1.7015-2.181-2.1493-2.9932a1.9117 1.9117 0 0 1 0-1.8484C3.5712 8.8726 6.7495 4.5 12 4.5c1.2116 0 2.3128.2328 3.3051.6181l-1.5923 1.5923Z"/><path fill-rule="evenodd" d="M2.3544 19.5503c-.409-.4091-.409-1.0724 0-1.4816L18.0688 2.3545c.4091-.4092 1.0725-.4092 1.4816 0 .4091.409.4091 1.0724 0 1.4815L3.836 19.5503c-.4091.4091-1.0724.4091-1.4815 0Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

EyeOffOutline.displayName = 'EyeOffOutline'

export const tags = ['EyeOffOutline', '']
