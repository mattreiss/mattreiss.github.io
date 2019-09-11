import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    inline: true,
    header: true,
  })
)

function loadStories() {
  require('./stories/Buttons.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);
