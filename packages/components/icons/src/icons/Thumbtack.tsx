import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Thumbtack = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="Thumbtack"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.94977 15.4353 6.06068 19.3244C5.67016 19.7149 5.03699 19.7149 4.64647 19.3244 4.25595 18.9338 4.25595 18.3007 4.64647 17.9102L8.53556 14.0211 9.94977 15.4353ZM13.3953 3.83041C14.1056 2.80447 15.5716 2.67228 16.4539 3.55461L20.4162 7.51694C21.2986 8.39927 21.1664 9.86527 20.1404 10.5755L16.8199 12.8744 15.6271 16.9298C15.1987 18.3862 13.3676 18.8531 12.2942 17.7797L6.19118 11.6767C5.11771 10.6032 5.58463 8.77209 7.04106 8.34373L11.0964 7.15097 13.3953 3.83041ZM19.002 8.93115 15.0397 4.96883 12.7408 8.28939C12.4806 8.6653 12.0994 8.94069 11.6608 9.0697L7.60539 10.2625 13.7084 16.3654 14.9011 12.3101C15.0301 11.8714 15.3055 11.4902 15.6814 11.23L19.002 8.93115Z"/>',
      }}
    />
  )
)

Thumbtack.displayName = 'Thumbtack'

export const tags = ['Thumbtack', '']
