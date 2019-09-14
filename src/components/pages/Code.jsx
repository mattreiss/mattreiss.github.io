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

class Code extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
            start={23}
            end={32}
            showLines={true}
          />
        </Article>
      </Section>
    )
  }
}

export default Code;
