import React from 'react';
import { Link } from 'react-router-dom';
import {
  CodeSnippet,
  Article,
  Section,
  Title,
  SubTitle,
  Paragraph,
  Highlight
} from '../atoms';
import {
  PageTemplate
} from '../templates';

class Code extends React.Component {
  render() {
    return (
      <PageTemplate
        content={(
          <Section>
            <Article>
              <Title>Chess</Title>
              <SubTitle>09/14/2019</SubTitle>
              <Paragraph>
                Chess Code:
              </Paragraph>
              <CodeSnippet
                url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
                start={22}
                end={33}
                showLines={true}
              />
              <Paragraph>
                How the Pieces are valued:
              </Paragraph>
              <CodeSnippet
                url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
                start={34}
                end={63}
                showLines={true}
              />
            </Article>
          </Section>
        )}
      />
    )
  }
}

export default Code;
