import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const LightMode = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="LightMode"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9592 5.8941C15.3395 5.8941 18.0836 8.63821 18.0836 12.0185 18.0836 15.3988 15.3395 18.1429 11.9592 18.1429 8.57894 18.1429 5.83482 15.3988 5.83482 12.0185 5.83482 8.63821 8.57894 5.8941 11.9592 5.8941ZM8.13147 13.741C7.862 13.741 7.62391 13.5645 7.54583 13.3065 7.42985 12.8974 7.36592 12.4652 7.36592 12.0185 7.36592 9.48338 9.4241 7.4252 11.9592 7.4252 12.2287 7.4252 12.4668 7.60166 12.5449 7.85965 12.6609 8.26883 12.7248 8.70099 12.7248 9.14768 12.7248 11.6828 10.6666 13.741 8.13147 13.741ZM17.9493 4.94762 16.9457 5.95124C16.6344 6.2625 16.6344 6.76756 16.9457 7.07882 17.2569 7.39008 17.762 7.39008 18.0733 7.07882L19.0769 6.0752C19.3881 5.76394 19.3884 5.25861 19.0772 4.94735 18.7659 4.63609 18.2606 4.63636 17.9493 4.94762ZM5.87369 17.0232 4.93503 17.9619C4.62377 18.2731 4.62377 18.7782 4.93503 19.0894 5.2463 19.4007 5.75135 19.4007 6.06261 19.0894L7.00127 18.1508C7.31253 17.8395 7.31253 17.3345 7.00127 17.0232 6.69001 16.712 6.18495 16.712 5.87369 17.0232ZM19.03 17.9564 18.0784 17.0048C17.7674 16.6938 17.2621 16.6935 16.9508 17.0048 16.6395 17.316 16.6398 17.8214 16.9508 18.1324L17.9024 19.084C18.2137 19.3953 18.719 19.3955 19.0303 19.0843 19.3416 18.773 19.3413 18.2677 19.03 17.9564ZM6.98664 5.91305 6.02119 4.94759C5.70993 4.63633 5.2046 4.63606 4.89334 4.94732 4.58208 5.25859 4.58235 5.76391 4.89361 6.07517L5.85906 7.04063C6.17032 7.35189 6.67538 7.35189 6.98664 7.04063 7.2979 6.72936 7.2979 6.22431 6.98664 5.91305ZM21.2023 11.2359H19.783C19.3428 11.2359 18.9856 11.593 18.9856 12.0332 18.9856 12.4734 19.3428 12.8305 19.783 12.8305H21.2023C21.6425 12.8305 22 12.4734 22 12.0332 22 11.593 21.6425 11.2359 21.2023 11.2359ZM4.12478 11.2359H2.79732C2.35713 11.2359 2 11.593 2 12.0332 2 12.4734 2.35713 12.8305 2.79732 12.8305H4.12478C4.56498 12.8305 4.92211 12.4734 4.92211 12.0332 4.92211 11.593 4.56498 11.2359 4.12478 11.2359ZM12.7679 21.1987V19.8528C12.7679 19.413 12.4107 19.0555 11.9705 19.0555 11.5303 19.0555 11.1732 19.413 11.1732 19.8528V21.1987C11.1732 21.6389 11.5303 21.9964 11.9705 21.9964 12.4107 21.9964 12.7679 21.6389 12.7679 21.1987ZM12.7679 4.16672V2.80137C12.7679 2.36117 12.4107 2.00366 11.9705 2.00366 11.5303 2.00366 11.1732 2.36117 11.1732 2.80137V4.16672C11.1732 4.60692 11.5303 4.96405 11.9705 4.96405 12.4107 4.96405 12.7679 4.60692 12.7679 4.16672Z"/>',
      }}
    />
  )
)

LightMode.displayName = 'LightMode'

export const tags = ['LightMode', '']
