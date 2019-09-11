import React from 'react';
import { storiesOf } from '@storybook/react';
import Buttons from '../../components/styled/Buttons';

let stories = storiesOf('Buttons', module);
for (let buttonName in Buttons) {
  stories.add(buttonName, () => {
    let ButtonComponent = Buttons[buttonName];
    return (
      <ButtonComponent>{buttonName} Button</ButtonComponent>
    )
  })
}
