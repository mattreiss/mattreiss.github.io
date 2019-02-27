import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    inline: true,
    header: true,
  })
)

function loadStories() {
  require('./Stories/Buttons.js');
  require('./Stories/Screens.js');
  require('./Stories/Views.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);
