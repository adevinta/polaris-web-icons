import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Holidays = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Holidays"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m16.57,1.71c-.23.62.09,1.31.71,1.54.62.23,1.31-.09,1.54-.71l.21-.57c.23-.62-.09-1.31-.71-1.54-.62-.23-1.31.09-1.54.71l-.21.57Z"/><path fill-rule="evenodd" d="m18.37,12.2c.47-.39.88-.87,1.18-1.45,1.2-2.29.31-5.11-1.98-6.3-2.06-1.08-4.55-.47-5.9,1.34-1.18-.54-2.62-.32-3.59.65L.79,13.73c-.47.47-.47,1.23,0,1.7.47.47,1.23.47,1.7,0l.13-.13v4.15c0,2.32,1.88,4.2,4.2,4.2h6.8c2.32,0,4.2-1.88,4.2-4.2v-4.4l.15.15c.47.47,1.23.47,1.7,0,.47-.47.47-1.23,0-1.7l-1.3-1.3Zm-5.15-5.15l3.72,3.72c.34-.24.63-.56.83-.95.68-1.31.18-2.92-1.13-3.6-1.2-.63-2.67-.25-3.42.83Zm-2.31,1.08l4.51,4.51v6.8c0,.99-.81,1.8-1.8,1.8h-6.8c-.99,0-1.8-.81-1.8-1.8v-6.55l4.76-4.76c.31-.31.82-.31,1.13,0Z"/><path d="M23.48 11.52c-.23.62-.92.94-1.54.71l-.57-.21c-.62-.23-.94-.92-.71-1.54.23-.62.92-.94 1.54-.71l.57.21c.62.23.94.92.71 1.54ZM12.99 3.42c-.6.28-1.31.01-1.59-.59l-.25-.55c-.28-.6-.01-1.31.59-1.59.6-.28 1.31-.01 1.59.59l.25.55c.28.6.01 1.31-.59 1.59ZM21.02 4.57c-.6.28-.86.99-.59 1.59.28.6.99.86 1.59.59l.55-.25c.6-.28.86-.99.59-1.59-.28-.6-.99-.86-1.59-.59l-.55.25Z"/>',
      }}
    />
  )
)

Holidays.displayName = 'Holidays'

export const tags = ['Holidays', '']
