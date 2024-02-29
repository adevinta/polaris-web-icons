import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Wifi = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Wifi"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M12 16.56c-.37 0-.67.2-.67.44s.3.44.67.44.67-.2.67-.44-.3-.44-.67-.44Zm0 1.44c-.83 0-1.5-.45-1.5-1s.67-1 1.5-1 1.5.45 1.5 1-.67 1-1.5 1ZM14.65 14c-.08 0-.17-.03-.24-.11-.66-.71-1.52-1.1-2.43-1.1s-1.75.38-2.41 1.08c-.14.15-.36.14-.49-.02-.13-.16-.12-.41.02-.56.79-.83 1.82-1.29 2.89-1.29s2.11.47 2.9 1.31c.14.15.15.4.02.56-.08.09-.17.13-.26.13Z"/><path fill-rule="evenodd" d="m17.14,12c-.09,0-.19-.04-.26-.11-1.29-1.38-3.03-2.13-4.88-2.13s-3.58.75-4.87,2.12c-.14.15-.37.15-.51.01-.14-.15-.15-.38-.01-.53,1.43-1.53,3.34-2.36,5.39-2.36s3.97.84,5.41,2.36c.14.15.14.39-.01.53-.08.07-.17.11-.26.11Z"/><path fill-rule="evenodd" d="m19.15,10c-.11,0-.22-.05-.29-.13-1.64-2.03-4.14-3.2-6.86-3.2s-5.21,1.16-6.85,3.18c-.12.15-.35.18-.5.07-.16-.12-.19-.32-.07-.47,1.77-2.19,4.48-3.45,7.42-3.45s5.66,1.26,7.43,3.47c.12.15.09.36-.07.47-.06.04-.14.06-.21.06Z"/>',
      }}
    />
  )
)

Wifi.displayName = 'Wifi'

export const tags = ['Wifi', '']
