import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SupportSmileFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SupportSmileFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m10.27,4.31c.54-.21,1.12-.32,1.71-.31.01,0,.02,0,.04,0,.58-.01,1.16.09,1.71.31.54.21,1.04.53,1.46.94.42.41.76.89.99,1.43.23.53.36,1.11.36,1.69v2.25s0,2.74,0,2.74c0,0,0,.02,0,.03v3.12c0,.47-.19.92-.52,1.25-.15.15-.32.27-.51.36-.13-.28-.31-.54-.54-.77-.51-.51-1.21-.8-1.93-.8h-2.08c-.72,0-1.42.29-1.93.8-.51.51-.8,1.21-.8,1.93s.29,1.42.8,1.93c.51.51,1.21.8,1.93.8h2.08c.72,0,1.42-.29,1.93-.8.29-.29.51-.64.65-1.03.68-.16,1.32-.5,1.82-1.01.71-.71,1.1-1.67,1.1-2.67v-.04h1.08c.63,0,1.24-.25,1.69-.7.45-.45.7-1.05.7-1.69v-2.77c0-.63-.25-1.24-.7-1.69-.45-.45-1.05-.7-1.69-.7h-1.08v-.58c-.01-.85-.19-1.68-.53-2.46-.34-.78-.82-1.48-1.43-2.07-.61-.59-1.33-1.05-2.12-1.36-.78-.31-1.62-.46-2.46-.45-.84-.01-1.68.14-2.46.45-.79.31-1.51.77-2.12,1.36-.61.59-1.1,1.29-1.43,2.07-.34.78-.52,1.61-.53,2.46v.02s0,.56,0,.56h-1.08c-.63,0-1.24.25-1.69.7-.45.45-.7,1.05-.7,1.69v2.77c0,.63.25,1.24.7,1.69.45.45,1.05.7,1.69.7h1.38c.45,0,.88-.18,1.2-.5.32-.32.5-.75.5-1.2v-2.77s0-3.63,0-3.63c0-.58.13-1.16.36-1.69.23-.54.57-1.02.99-1.43.42-.41.92-.73,1.46-.94Z"/><path d="m9.64,11.9c.45-.12.91.15,1.03.59.11.42.65.83,1.38.87.34.02.63-.05.85-.19.21-.14.37-.35.43-.65.1-.45.54-.74,1-.64.45.1.74.54.64,1-.35,1.63-1.79,2.22-3.01,2.16-1.17-.06-2.54-.75-2.91-2.12-.12-.45.15-.91.59-1.03Z"/>',
      }}
    />
  )
)

SupportSmileFill.displayName = 'SupportSmileFill'

export const tags = ['SupportSmileFill', '']
