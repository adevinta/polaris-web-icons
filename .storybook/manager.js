import { addons } from '@storybook/manager-api'

import React from 'react'
import { defaultTheme } from '@spark-ui/theme-utils'

import { getTheme } from './theme/getTheme.js'

addons.setConfig({
  theme: getTheme({ base: 'light', sparkTheme: defaultTheme }),
  sidebar: {
    showRoots: true,
    collapsedRoots: ['using-spark', 'hooks', 'contributing', 'experimental', 'utils'],
  },
})
