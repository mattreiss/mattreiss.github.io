import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme';

addDecorator(
  withInfo({
    inline: true,
    header: true,
  })
)

addDecorator(
  storyFn => <ThemeProvider theme={Theme.self}>{storyFn()}</ThemeProvider>
)

function loadStories() {
  require('./stories/components/styled.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);
