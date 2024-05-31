import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EyeOffFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="EyeOffFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M2.3544 18.0687c-.409.4091-.409 1.0725 0 1.4816.4092.4091 1.0725.4091 1.4816 0L19.5503 3.836c.4091-.4091.4091-1.0724 0-1.4815-.4091-.4092-1.0725-.4092-1.4816 0L15.3051 5.118C14.3128 4.7328 13.2116 4.5 12 4.5c-5.2505 0-8.4288 4.3726-9.6435 6.5758a1.9117 1.9117 0 0 0 0 1.8484c.4478.8122 1.1624 1.9192 2.1493 2.9932l-2.1513 2.1513Zm5.2246-5.2246 5.2651-5.265A4.524 4.524 0 0 0 12 7.5c-2.4853 0-4.5 2.0147-4.5 4.5 0 .2885.0271.5707.079.8441Z" clip-rule="evenodd"/><path d="M7.6162 18.3838C8.8702 19.0578 10.3303 19.5 12 19.5c5.2505 0 8.4288-4.3726 9.6435-6.5758a1.912 1.912 0 0 0 0-1.8484c-.5591-1.0141-1.5343-2.4879-2.936-3.7833l-2.686 2.686A4.4814 4.4814 0 0 1 16.5 12c0 2.4853-2.0147 4.5-4.5 4.5a4.4814 4.4814 0 0 1-2.0215-.4785l-2.3623 2.3623Z"/><path d="M12 14.5a2.514 2.514 0 0 1-.4581-.0419l2.9162-2.9162A2.514 2.514 0 0 1 14.5 12c0 1.3807-1.1193 2.5-2.5 2.5Z"/>',
      }}
    />
  )
)

EyeOffFill.displayName = 'EyeOffFill'

export const tags = ['EyeOffFill', '']
