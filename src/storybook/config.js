import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import StorybookTheme from './StorybookTheme';
import Theme from '../theme';

addDecorator(
  withInfo({
    inline: true,
    header: true,
  })
)

addDecorator(storyFn => (
  <ThemeProvider theme={Theme.self}>
    {storyFn()}
  </ThemeProvider>
))



addParameters({
  options: {
    theme: StorybookTheme,
  }
});


configure(require.context('../components', true, /.stories.js$/), module)
