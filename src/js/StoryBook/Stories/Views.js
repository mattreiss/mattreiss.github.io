import React from 'react';
import { storiesOf } from '@storybook/react';
import { Views } from '../../Components';

let stories = storiesOf('Views', module);
for (let view in Views) {
  stories.add(view, () => {
    let TheView = Views[view];
    return (
      <TheView />
    )
  })
}
