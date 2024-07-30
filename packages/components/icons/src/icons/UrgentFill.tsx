import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const UrgentFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="UrgentFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M5.9994 2c-.553 0-1.0012.4486-1.0012 1.002 0 .5535.4483 1.0022 1.0012 1.0022v2.3426c0 1.7651.7006 3.458 1.9477 4.7061a6.648 6.648 0 0 0 1.193.9473 6.6498 6.6498 0 0 0-1.193.9472 6.6585 6.6585 0 0 0-1.9477 4.7062l-.0001 2.3416c-.553 0-1.0012.4487-1.0012 1.0021s.4482 1.0021 1.0012 1.0021h.3109c.0118.0004.0238.0006.0357.0006H17.643c.0119 0 .0239-.0002.0357-.0006h.3181c.553 0 1.0012-.4487 1.0012-1.0021s-.4482-1.0021-1.0012-1.0021v-2.3416c0-1.7652-.6795-3.458-1.9265-4.7062-.3631-.3633-.7849-.6804-1.2141-.9472a6.6515 6.6515 0 0 0 1.193-.9473 6.6583 6.6583 0 0 0 1.9477-4.7061l-.0078-2.3426c.5529 0 1.0012-.4487 1.0012-1.0021C18.9903 2.4486 18.542 2 17.9891 2H5.9994Zm8.655 5.2633c.1022-.3834-.2284-.7104-.6249-.7104H9.9599c-.3965 0-.727.327-.6248.7104.1238.4642.3679.8921.7132 1.2377a2.7514 2.7514 0 0 0 3.8929 0 2.7556 2.7556 0 0 0 .7132-1.2376Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

UrgentFill.displayName = 'UrgentFill'

export const tags = ['UrgentFill', '']
