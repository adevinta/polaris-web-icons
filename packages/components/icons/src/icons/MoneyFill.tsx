import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MoneyFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="MoneyFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m21.02,11.92c-.24.24-.57.49-.98.65-1.38.73-3.33,1.14-5.28,1.14s-3.9-.41-5.28-1.14c-.41-.16-.73-.41-.98-.65-.57-.49-.98-1.22-.98-1.95v4.31c.24.16.57.32.98.57.33.16.65.24.98.41,1.46.57,3.41.98,5.28.98s3.82-.41,5.28-.98c.33-.16.65-.24.98-.41.41-.16.73-.41.98-.57v-4.39c0,.81-.41,1.54-.98,2.03Zm-.98,5.36c-1.87.57-3.98.89-5.28.89-1.46,0-3.41-.33-5.28-.89-.33-.16-.65-.24-.98-.41-.33-.16-.65-.24-.98-.41v1.79c0,2.44,3.66,3.74,7.24,3.74s7.24-1.3,7.24-3.74v-1.71c-.33.16-.65.33-.98.41-.33.16-.65.24-.98.32Z"/><path d="m9.48,9.97c0,.65,2.03,1.79,5.28,1.79s5.28-1.14,5.28-1.79-2.03-1.79-5.28-1.79-5.28,1.14-5.28,1.79Z"/><path d="m4.68,8.75c.16.08.24.08.41.08.41,0,.73-.24.89-.57.24-.49,0-1.06-.57-1.3-.98-.41-1.46-.89-1.46-1.14,0-.65,2.03-1.79,5.28-1.79,1.71-.08,3.41.33,4.88,1.22.49.24,1.06.16,1.38-.33.24-.49.16-1.06-.33-1.38-1.79-1.14-3.82-1.63-5.93-1.54-4.15,0-7.24,1.63-7.24,3.74v8.29c0,.73.33,2.03,2.68,3.01.08.08.24.08.41.08.41,0,.73-.24.89-.57.16-.49-.08-1.06-.57-1.3-.98-.41-1.46-.89-1.46-1.22v-1.54c.24.08.49.24.73.33.08.08.24.08.41.08.41,0,.73-.24.89-.57.24-.49,0-1.06-.57-1.3-.98-.41-1.46-.89-1.46-1.22v-1.38c.24.08.49.24.73.33Z"/>',
      }}
    />
  )
)

MoneyFill.displayName = 'MoneyFill'

export const tags = ['MoneyFill', '']
