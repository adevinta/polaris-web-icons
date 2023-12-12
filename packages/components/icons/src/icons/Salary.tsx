import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Salary = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Salary"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,3.5c4.69,0,8.5,3.81,8.5,8.5,0,4.69-3.81,8.5-8.5,8.5-4.69,0-8.5-3.81-8.5-8.5S7.31,3.5,12,3.5Zm0,.8c-4.25,0-7.7,3.45-7.7,7.7s3.45,7.7,7.7,7.7,7.7-3.45,7.7-7.7c0-4.25-3.45-7.7-7.7-7.7Zm-3.27,4.83c1.67-2.01,4.74-2.35,6.85-.77.23.18.27.5.08.72-.19.22-.52.26-.76.08-.38-.28-.81-.5-1.27-.63-2.01-.57-4.12.52-4.72,2.43h3.09c.3,0,.54.23.54.51s-.24.52-.54.52h-3.25c0,.17.01.34.04.51h3.21c.3,0,.54.23.54.52s-.24.51-.54.51h-2.88c.13.27.3.52.5.75,1.33,1.53,3.73,1.75,5.34.48.23-.18.57-.15.76.07.19.22.16.54-.07.73-.88.69-1.98,1.06-3.12,1.07-2.06,0-3.9-1.24-4.59-3.09h-.83c-.3,0-.54-.23-.54-.51s.24-.52.54-.52h.57c-.02-.17-.03-.34-.03-.51h-.54c-.3,0-.54-.23-.54-.52s.24-.51.54-.51h.67c.16-.67.48-1.3.93-1.84Z"/>',
      }}
    />
  )
)

Salary.displayName = 'Salary'

export const tags = ['Salary', '']
