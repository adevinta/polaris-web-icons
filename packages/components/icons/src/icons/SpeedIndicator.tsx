import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SpeedIndicator = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SpeedIndicator"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,5c.64,0,1.26.08,1.85.25.59.17,1.15.4,1.68.71.52.31,1,.67,1.41,1.09.42.42.78.9,1.09,1.42.31.52.55,1.08.71,1.67.16.59.25,1.21.26,1.86,0,.64-.08,1.26-.25,1.85-.17.59-.4,1.15-.71,1.68-.31.52-.67,1-1.09,1.41-.42.42-.9.78-1.42,1.09s-1.08.55-1.67.71c-.59.16-1.21.25-1.86.26-.64,0-1.26-.08-1.85-.25-.59-.17-1.15-.4-1.68-.71-.53-.31-1-.67-1.41-1.09-.42-.42-.78-.9-1.09-1.42s-.55-1.08-.71-1.67c-.16-.59-.25-1.21-.26-1.86,0-.64.08-1.26.25-1.85.17-.59.4-1.15.71-1.68.31-.53.67-1,1.09-1.41.42-.42.9-.78,1.42-1.09.52-.31,1.08-.55,1.67-.71.59-.16,1.21-.25,1.86-.26Zm0,13.07c.56,0,1.1-.07,1.61-.22.52-.15,1-.35,1.44-.61.45-.26.86-.58,1.23-.95s.69-.78.95-1.23c.26-.45.46-.93.61-1.45.15-.52.22-1.06.22-1.61,0-.56-.07-1.1-.22-1.61-.15-.52-.35-1-.61-1.44-.26-.45-.58-.86-.95-1.23s-.78-.69-1.23-.95c-.45-.26-.93-.46-1.45-.61-.52-.15-1.06-.22-1.61-.22-.56,0-1.1.07-1.61.22-.52.15-1,.35-1.44.61-.45.26-.86.58-1.23.95-.37.37-.69.78-.95,1.22-.26.45-.46.93-.61,1.45-.15.52-.22,1.06-.22,1.61,0,.56.07,1.1.22,1.61.15.52.35,1,.61,1.44.26.45.58.86.95,1.23.37.37.78.69,1.22.95.45.26.93.46,1.45.61.52.15,1.06.22,1.61.22Zm1.26-6.67s0,0,0,0c.09.19.14.39.14.6,0,.19-.04.38-.11.55-.07.17-.17.32-.3.44s-.27.23-.44.3c-.17.07-.35.11-.55.11s-.38-.04-.55-.11c-.17-.07-.32-.17-.44-.3s-.23-.27-.3-.44c-.07-.17-.11-.35-.11-.55s.04-.38.11-.55c.07-.17.17-.32.3-.44s.27-.23.44-.3c.17-.07.35-.11.55-.11.21,0,.41.05.6.14,0,0,0,0,0,0,0,0,0,0,0,0l2.35-2.35c.18-.18.48-.18.66,0,.18.18.18.48,0,.66l-2.35,2.35s0,0,0,0Zm-1.26,1.07c.13,0,.24-.05.33-.14.09-.09.14-.2.14-.33s-.05-.24-.14-.33c-.09-.09-.2-.14-.33-.14s-.24.05-.33.14c-.09.09-.14.2-.14.33s.05.24.14.33c.09.09.2.14.33.14Zm4.25-2.38c.23-.1.51,0,.59.24.07.19.12.39.16.59.07.35.11.71.12,1.08,0,.68-.13,1.33-.38,1.96-.19.48-.46.92-.79,1.32-.17.2-.47.2-.65.01s-.18-.48-.02-.68c.25-.3.44-.64.6-1,.21-.51.32-1.04.32-1.6,0-.45-.07-.88-.21-1.31-.08-.24.02-.52.26-.62Zm-2.33-2.34c-.11.24-.38.34-.63.26-.42-.14-.86-.21-1.31-.21-.38,0-.75.05-1.11.15-.35.1-.69.24-1,.43-.31.19-.59.41-.85.66-.25.25-.47.53-.65.85-.18.32-.32.65-.42,1-.1.35-.15.72-.15,1.12,0,.56.11,1.09.32,1.6.15.37.35.7.6,1.01.16.2.16.5-.02.68s-.48.19-.65-.01c-.33-.4-.6-.84-.8-1.32-.26-.62-.39-1.28-.39-1.97,0-.47.06-.93.18-1.36.12-.44.29-.85.52-1.23.22-.38.49-.72.8-1.04s.66-.58,1.04-.79c.38-.22.79-.39,1.23-.52s.89-.19,1.37-.18c.36,0,.72.04,1.07.11.2.04.4.1.6.17.24.09.34.36.24.59Z"/>',
      }}
    />
  )
)

SpeedIndicator.displayName = 'SpeedIndicator'

export const tags = ['SpeedIndicator', '']
