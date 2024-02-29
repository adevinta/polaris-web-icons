import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Breakfast = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Breakfast"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M17.76 15.85c0 1.61-1.35 2.93-3.02 2.93h-2.06c-1.66 0-3.02-1.31-3.02-2.93v-4.7s-.03-.08-.04-.12v-.81s8.14-.05 8.14-.05v5.68Zm-8.85-3.16v2.14l-.8.15c-.14.03-.29 0-.4-.1-.11-.09-.17-.22-.17-.36v-1.52c0-.14.06-.27.17-.36.09-.07.2-.11.31-.11.03 0 .06 0 .09 0l.8.15Zm.01 3.4-.7.19c-.45.12-.93.03-1.31-.25-.42-.31-.66-.79-.66-1.33v-1.9c0-.53.24-1.02.66-1.33.27-.2.59-.3.91-.3.13 0 .27.02.4.05l.7.19v.54l-.66-.12c-.36-.07-.73.03-1.01.25-.28.23-.44.56-.44.91v1.52c0 .35.16.69.44.91.22.18.5.27.78.27.08 0 .15 0 .23-.02l.66-.12v.29c0 .08 0 .16 0 .24Zm8.89-6.59h-8.2c-.38 0-.69.3-.69.67v.51l-.5-.13c-.68-.18-1.39-.05-1.96.37-.61.45-.96 1.14-.96 1.9v1.9c0 .76.35 1.45.96 1.9.4.3.88.45 1.36.45.2 0 .4-.03.6-.08l.64-.17c.43 1.55 1.88 2.7 3.62 2.7h2.06c2.07 0 3.76-1.64 3.76-3.65v-5.68c0-.37-.31-.67-.69-.67ZM14.99 8.15c0 .19.11.35.26.35s.26-.16.26-.35c0-.4-.14-.66-.26-.88-.12-.22-.23-.41-.23-.8 0-.33.07-.44.19-.61.13-.19.3-.46.3-1.01 0-.19-.11-.35-.26-.35s-.26.16-.26.35c0 .28-.06.37-.17.54-.13.2-.32.48-.32 1.08s.19.97.33 1.22c.11.19.16.3.16.46Zm-2 0c0 .19.11.35.26.35s.26-.16.26-.35c0-.4-.14-.66-.26-.88-.12-.22-.23-.41-.23-.8 0-.33.07-.44.19-.61.13-.19.3-.46.3-1.01 0-.19-.11-.35-.26-.35s-.26.16-.26.35c0 .28-.06.37-.17.54-.13.2-.32.48-.32 1.08s.19.97.33 1.22c.11.19.16.3.16.46Zm-2 0c0 .19.11.35.26.35s.26-.16.26-.35c0-.4-.14-.66-.26-.88-.12-.22-.23-.41-.23-.8 0-.33.07-.44.19-.61.13-.19.3-.46.3-1.01 0-.19-.11-.35-.26-.35s-.26.16-.26.35c0 .28-.06.37-.17.54-.13.2-.32.48-.32 1.08s.19.97.33 1.22c.11.19.16.3.16.46Z"/>',
      }}
    />
  )
)

Breakfast.displayName = 'Breakfast'

export const tags = ['Breakfast', '']
