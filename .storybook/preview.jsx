import '../src/tailwind.css'
import './sb-theming.css'
import { ToC } from '@docs/helpers/ToC'

import { DocsContainer } from '@storybook/blocks'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { Icon } from '@spark-ui/icon'
import { ShareExpand } from '@spark-ui/icons/dist/icons/ShareExpand'

const ExampleContainer = ({ children, ...props }) => {
  return (
    <DocsContainer {...props}>
      <div id="spark-doc-container">{children}</div>
      <ToC />
    </DocsContainer>
  )
}

export const parameters = {
  docs: {
    container: ExampleContainer,
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Using Spark',
        'Components',
        'Utils',
        'Hooks',
        'Contributing',
        '*',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
  (storyFn, { id, viewMode }) => {
    return (
      <div className="relative w-full">
        {viewMode === 'docs' && (
          <div className="absolute -right-lg -top-xl">
            <a
              href={`/iframe.html?&id=${id}`}
              target="_blank"
              className="text-basic hover:text-basic-hovered focus:text-basic-focused enabled:active:text-basic-pressed"
            >
              <Icon size="sm" label="expand">
                <ShareExpand />
              </Icon>
            </a>
          </div>
        )}
        {storyFn()}
      </div>
    )
  },
]
