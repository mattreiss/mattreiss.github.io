import React from 'react';
import {
  Section,
  Article,
  Title
} from '../atoms';
import {
  PageTemplate
} from '../templates';

class Stacker extends React.Component {
  render() {
    return (
      <PageTemplate
        content={(
          <Section>
            <Article>
              <Title>Stacker</Title>
            </Article>
          </Section>
        )}
      />
    )
  }
}

export default Stacker;
