import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShovelRake = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="ShovelRake"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M9.24 12.78h-.72v-7.72c0-.22-.17-.39-.39-.39-.28 0-.44.17-.44.39v7.72h-.77c-.77 0-1.43.67-1.43 1.46v4.87c0 .22.17.39.39.39h4.35c.22 0 .39-.17.39-.39v-4.87c.06-.78-.61-1.46-1.38-1.46Zm.66 5.82v.11h-3.63v-4.42c0-.39.28-.67.66-.67h.72v1.96c0 .22.17.39.39.39s.39-.17.39-.39v-1.96h.72c.39 0 .66.28.66.67v4.31h.11ZM18.16 4.5c-.22 0-.39.17-.39.39v.67c0 .39-.33.73-.72.73h-.22v-1.4c0-.22-.17-.39-.39-.39s-.39.17-.39.39v1.4h-1.05v-1.4c0-.11-.06-.22-.11-.28-.06-.06-.17-.11-.28-.11-.22 0-.39.17-.39.39v1.4h-.94v-1.4c0-.22-.17-.39-.39-.39s-.39.17-.39.39v1.4h-.28c-.39 0-.72-.34-.72-.73v-.67c0-.17-.22-.39-.39-.39s-.39.17-.39.39v.67c0 .84.66 1.51 1.49 1.51h1.98v12.03c0 .22.17.39.39.39s.39-.17.39-.39V7.07h1.98c.83 0 1.49-.67 1.49-1.51v-.67c.06-.17-.17-.39-.33-.39Z"/>',
      }}
    />
  )
)

ShovelRake.displayName = 'ShovelRake'

export const tags = ['ShovelRake', '']
