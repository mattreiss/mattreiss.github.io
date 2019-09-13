import React from 'react';
import { storiesOf } from '@storybook/react';
import * as StyledComponents from '../../../components/styled';


for (let StyledComponentName in StyledComponents) {
  let stories = storiesOf(StyledComponentName, module);
  let StyledComponent = StyledComponents[StyledComponentName];
  for (let componentName in StyledComponent) {
    stories.add(componentName, () => {
      let Component = StyledComponent[componentName];
      return (
        <Component primary>{componentName}</Component>
      )
    })
  }
}
