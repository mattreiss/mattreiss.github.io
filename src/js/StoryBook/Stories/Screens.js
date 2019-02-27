import React from 'react';
import { storiesOf } from '@storybook/react';
import { Screens } from '../../Components';

let stories = storiesOf('Screens', module);
for (let screen in Screens) {
  stories.add(screen, () => {
    let TheScreen = Screens[screen];
    return (
      <TheScreen />
    )
  })
}
