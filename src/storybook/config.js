import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme';

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(
  withInfo({
    inline: true,
    header: true,
  })
)

// addDecorator(storyFn => (
//   <ThemeProvider theme={Theme.self}>
//     {storyFn()}
//   </ThemeProvider>
// ))

configure(loadStories, module)
