import React from 'react';
import { storiesOf } from '@storybook/react';
import { Buttons } from '../../Components';

let stories = storiesOf('Buttons', module);
for (let button in Buttons) {
  stories.add(button, () => {
    let TheButton = Buttons[button];
    return (
      <TheButton />
    )
  })
}
