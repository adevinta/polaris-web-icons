import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TopAd = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      data-title="TopAd"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m9.9497 15.4354-3.5355 3.5355c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l3.5355-3.5355 1.4142 1.4142Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.3996 3.7939c.7184-1.0057 2.1678-1.1256 3.0417-.2517l3.9874 3.9874c.8739.8739.754 2.3233-.2517 3.0417l-3.7246 2.6604-1.5068 4.5204c-.4701 1.4105-2.2603 1.8331-3.3116.7818l-6.197-6.1971c-1.0513-1.0513-.6287-2.8414.7818-3.3115l4.5204-1.5069 2.6604-3.7245Zm5.6149 5.1499-3.9874-3.9874-2.6604 3.7245a2 2 0 0 1-.995.735l-4.5205 1.5067 6.1971 6.1971 1.5068-4.5205a1.9994 1.9994 0 0 1 .7349-.995l3.7245-2.6604Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

TopAd.displayName = 'TopAd'

export const tags = ['TopAd', '']