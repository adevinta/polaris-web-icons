import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PhoneOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="PhoneOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m4.22,2.71c.47-.46,1.09-.71,1.75-.71s1.28.26,1.75.71h0s2.63,2.64,2.63,2.64c.46.47.71,1.09.71,1.74s-.26,1.28-.71,1.74h-.01c-.04.05-.08.1-.1.16-.02.06-.04.12-.04.18s.01.12.04.18c.02.06.06.11.1.15h0s4.14,4.15,4.14,4.15c.09.09.21.13.33.13s.25-.05.34-.14h0c.46-.46,1.09-.71,1.74-.71s1.28.26,1.74.71h0s2.64,2.61,2.64,2.61h.01c.46.48.71,1.11.71,1.76s-.26,1.28-.71,1.75c0,0-.01.01-.02.02l-.61.6c-.87.88-2.02,1.44-3.25,1.57-1.24.14-2.48-.16-3.53-.83h-.02c-4.33-2.93-8.05-6.66-10.98-10.98,0,0,0-.01-.01-.02-.67-1.05-.97-2.29-.83-3.53.14-1.23.69-2.38,1.57-3.26l.6-.62s.01-.01.02-.02Zm1.42,1.44l-.6.61h-.01c-.56.56-.9,1.28-.99,2.06-.08.77.1,1.55.52,2.21,2.78,4.1,6.32,7.64,10.43,10.41.65.42,1.43.6,2.2.52.78-.09,1.5-.44,2.05-.99h.01s.61-.61.61-.61c.08-.09.13-.21.13-.33s-.05-.24-.13-.33l-2.63-2.6h0c-.09-.09-.2-.13-.33-.13s-.24.05-.33.13h0c-.47.46-1.09.72-1.75.72s-1.28-.26-1.75-.71h0s-4.14-4.15-4.14-4.15c-.23-.23-.42-.5-.54-.8-.13-.3-.19-.63-.19-.96s.07-.65.19-.96c.13-.3.31-.57.54-.8.08-.09.13-.2.13-.33s-.05-.24-.13-.33l-2.61-2.62c-.09-.09-.21-.13-.33-.13s-.24.05-.33.13Z"/>',
      }}
    />
  )
)

PhoneOutline.displayName = 'PhoneOutline'

export const tags = ['PhoneOutline', '']
