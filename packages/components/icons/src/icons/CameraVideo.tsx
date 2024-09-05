import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CameraVideo = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="CameraVideo"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H7.5C8.05228 15 8.5 14.5523 8.5 14C8.5 13.4477 8.05228 13 7.5 13H6Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.11325V9C15 8.309 14.7664 7.67257 14.3738 7.16537C13.8251 6.45644 12.9659 6 12 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H12C12.9659 18 13.8251 17.5436 14.3738 16.8346C14.7664 16.3274 15 15.691 15 15V14.8868L19 17.1962C20.3333 17.966 22 17.0037 22 15.4641L22 8.5359C22 6.99645 20.3337 6.03424 19.0004 6.80361L15 9.11325ZM15 12.5774V11.4227L20 8.5359L20 15.4641L15 12.5774ZM13 15C13 15.5523 12.5523 16 12 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H12C12.5523 8 13 8.44772 13 9V15Z"/>',
      }}
    />
  )
)

CameraVideo.displayName = 'CameraVideo'

export const tags = ['CameraVideo', '']
