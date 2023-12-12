import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const IdeaOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="IdeaOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m10.32,22c-.41,0-.79-.16-1.08-.45-.29-.29-.46-.67-.47-1.09v-1.93c-.73-.46-1.34-1.08-1.81-1.81-.58-.91-.92-1.96-.97-3.04-.05-1.08.19-2.16.69-3.12.5-.96,1.25-1.76,2.16-2.33.92-.57,1.96-.88,3.03-.9s2.13.24,3.07.78c.93.53,1.72,1.31,2.26,2.24.54.94.82,2.01.82,3.08-.02,1.13-.33,2.22-.92,3.17-.48.77-1.11,1.41-1.86,1.9v1.95c0,.44-.18.83-.47,1.11-.29.29-.68.45-1.09.45h-3.36Zm.44-2.02h2.47v-2.07c0-.39.22-.73.56-.9.66-.34,1.22-.84,1.61-1.47.39-.63.61-1.36.62-2.11,0-.72-.18-1.43-.55-2.06-.36-.62-.88-1.15-1.51-1.5-.62-.35-1.35-.52-2.05-.51-.72.02-1.42.23-2.02.61-.61.38-1.11.92-1.44,1.56-.33.64-.49,1.36-.46,2.08.03.72.26,1.42.65,2.03.39.61.93,1.1,1.57,1.42.34.17.56.52.56.9v2.03Zm10.23-9.39h-2.15c-.55,0-1-.45-1-1.01s.45-1.01,1-1.01h2.15c.55,0,1,.45,1,1.01s-.45,1.01-1,1.01Zm-15.85,0h-2.15c-.55,0-1-.45-1-1.01s.45-1.01,1-1.01h2.15c.55,0,1,.45,1,1.01s-.45,1.01-1,1.01Zm2.63-2.94c-.26,0-.52-.1-.71-.3l-1.52-1.55c-.39-.4-.38-1.04,0-1.43.39-.4,1.03-.39,1.42,0l1.52,1.55c.39.4.38,1.04,0,1.43-.19.19-.45.29-.7.29h0Zm8.42,0c-.26,0-.51-.1-.7-.29-.39-.4-.39-1.04,0-1.43l1.52-1.55c.39-.4,1.02-.4,1.42,0,.39.4.39,1.04,0,1.43l-1.52,1.55c-.19.2-.45.3-.71.3h0Zm-4.22-1.45c-.55,0-1-.45-1-1.01v-2.17c0-.56.45-1.01,1-1.01s1,.45,1,1.01v2.17c0,.56-.45,1.01-1,1.01Z"/>',
      }}
    />
  )
)

IdeaOutline.displayName = 'IdeaOutline'

export const tags = ['IdeaOutline', '']
