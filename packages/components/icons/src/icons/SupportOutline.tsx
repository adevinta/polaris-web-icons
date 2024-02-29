import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SupportOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="SupportOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.98,4c-.58-.01-1.16.09-1.71.31-.54.21-1.04.53-1.46.94-.42.41-.76.89-.99,1.43-.23.53-.36,1.11-.36,1.69v3.65s0,2.75,0,2.75c0,.45-.18.88-.5,1.2-.32.32-.75.5-1.2.5h-1.38c-.63,0-1.24-.25-1.69-.7-.45-.45-.7-1.05-.7-1.69v-2.77c0-.63.25-1.24.7-1.69.45-.45,1.05-.7,1.69-.7h1.08v-.58c.01-.85.19-1.68.53-2.46.34-.78.82-1.48,1.43-2.07.61-.59,1.33-1.05,2.12-1.36.78-.31,1.62-.46,2.46-.45.84-.01,1.68.14,2.46.45.79.31,1.51.77,2.12,1.36.61.59,1.1,1.29,1.43,2.07.34.78.52,1.61.53,2.46v.02s0,.56,0,.56h1.08c.63,0,1.24.25,1.69.7.45.45.7,1.05.7,1.69v2.77c0,.63-.25,1.24-.7,1.69-.45.45-1.05.7-1.69.7h-1.08v.04c0,1-.4,1.96-1.1,2.67-.5.5-1.14.85-1.82,1.01-.13.38-.35.73-.65,1.03-.51.51-1.21.8-1.93.8h-2.08c-.72,0-1.42-.29-1.93-.8-.51-.51-.8-1.21-.8-1.93s.29-1.42.8-1.93c.51-.51,1.21-.8,1.93-.8h2.08c.72,0,1.42.29,1.93.8.23.23.41.49.54.77.19-.09.36-.21.51-.36.33-.33.52-.78.52-1.25v-3.12s0-.02,0-.03v-2.76s0-2.23,0-2.23c0-.58-.13-1.16-.36-1.69-.23-.54-.57-1.02-.99-1.43-.42-.41-.92-.73-1.46-.94-.54-.21-1.12-.32-1.71-.31-.01,0-.02,0-.04,0Zm1.79,15.25c0-.19-.08-.37-.21-.5-.14-.14-.32-.21-.52-.21h-2.08c-.19,0-.38.08-.52.21-.14.14-.21.32-.21.52s.08.38.21.52c.14.14.32.21.52.21h2.08c.19,0,.38-.08.52-.21.13-.13.21-.31.21-.5,0,0,0-.01,0-.02s0-.01,0-.02Zm4.77-7.24v2.45h1.08c.1,0,.2-.04.27-.11.07-.07.11-.17.11-.27v-2.77c0-.1-.04-.2-.11-.27-.07-.07-.17-.11-.27-.11h-1.08v1.08h0Zm-14.15-1.09c-.1,0-.2.04-.27.11-.07.07-.11.17-.11.27v2.77c0,.1.04.2.11.27.07.07.17.11.27.11h1.08v-3.54h-1.08Z"/>',
      }}
    />
  )
)

SupportOutline.displayName = 'SupportOutline'

export const tags = ['SupportOutline', '']
