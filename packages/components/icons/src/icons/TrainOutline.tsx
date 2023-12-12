import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TrainOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="TrainOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m15.62,16.94c.35-.02.68-.16.94-.4.26-.24.43-.57.49-.93.06-.36,0-.73-.18-1.04-.17-.31-.44-.56-.77-.69-.32-.13-.68-.14-1.01-.03-.33.11-.61.34-.8.65-.19.31-.27.67-.23,1.03.04.36.19.7.44.95.15.15.33.27.53.35.2.08.4.12.61.11Zm-7.24,0c.21.01.42-.02.62-.1.2-.08.38-.2.53-.36.15-.16.27-.35.34-.56.08-.21.11-.43.1-.65,0-.22-.03-.44-.1-.65-.08-.21-.19-.39-.34-.55-.15-.16-.33-.28-.53-.36-.2-.08-.41-.12-.62-.11-.21,0-.42.03-.61.11-.2.08-.37.2-.52.35-.29.33-.45.75-.45,1.2s.16.87.45,1.2c.15.15.33.28.52.36.2.08.4.12.61.12Z"/><path d="m19.34,3.89c-.48-.56-1.09-.98-1.77-1.23-.82-.3-1.67-.48-2.53-.54-.95-.08-1.97-.13-3.04-.13s-1.98,0-2.93.13c-.87.06-1.72.24-2.55.54-.69.24-1.31.66-1.81,1.22-.49.6-.74,1.37-.71,2.16v10.08c-.01.49.08.98.25,1.43.18.45.44.87.77,1.21.53.57,1.22.94,1.97,1.04l-.5.51c-.11.12-.19.26-.23.41-.04.16-.05.32,0,.48.03.16.1.31.21.43.11.12.24.21.39.26.16.09.35.12.53.08.18-.04.34-.13.47-.27l1.79-1.88h4.72l1.8,1.88c.13.13.29.22.46.26.17.04.36.01.51-.08.15-.05.29-.14.39-.26.11-.12.18-.27.21-.43.04-.16.03-.32,0-.48-.04-.16-.12-.3-.23-.41l-.5-.51c.75-.1,1.44-.47,1.97-1.04.34-.34.6-.75.78-1.21.18-.45.27-.94.26-1.43V6.04c.04-.78-.2-1.54-.66-2.15Zm-12.67,1.12c.37-.23.76-.4,1.18-.51,1.36-.3,2.76-.43,4.15-.38,1.43-.05,2.86.07,4.26.36.42.1.82.28,1.19.53H6.67Zm-.64,5.66v-3.53h4.96v3.53h-4.96Zm0,2.13h11.94v3.33c0,.21-.03.42-.1.62-.07.2-.19.37-.33.52-.14.15-.31.27-.5.34-.19.08-.39.11-.59.11H7.55c-.2,0-.4-.03-.59-.11-.19-.08-.36-.2-.5-.34-.14-.15-.25-.33-.33-.52-.07-.2-.11-.41-.1-.62v-3.33Zm6.99-2.13v-3.53h4.95v3.53h-4.95Z"/>',
      }}
    />
  )
)

TrainOutline.displayName = 'TrainOutline'

export const tags = ['TrainOutline', '']
