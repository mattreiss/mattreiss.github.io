import React from 'react';
import Prism from 'prismjs';
import {
  CodeSnippet,
} from '../elements';
import {
  Button,
  TextButton,
  MenuButton
} from '../styled/Buttons';
import {
  Header,
  Nav,
  Article,
  Section,
  Row
} from '../styled/Views';

class Photos extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/BoardModel.js'
            start={23}
            end={50}
            showLines={true}
          />
        </Article>
      </Section>
    )
  }
}

export default Photos;
