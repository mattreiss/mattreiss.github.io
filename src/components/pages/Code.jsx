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
  Row,
  Title,
  SubTitle,
  Paragraph
} from '../styled/Views';

class Code extends React.Component {
  render() {
    return (
      <Section>
        <Article>
          <Title>Chess</Title>
          <SubTitle>09/14/2019</SubTitle>
          <Paragraph>
            I am working on a Chess App!
            I want to make Anti-Chess.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
            start={22}
            end={33}
            showLines={true}
          />
          <Paragraph>
            Those are how the Pieces are valued.
            Looks neat huh?
            It's gonna have realtime multiplayer.
            I am using Firebase Firestore.
          </Paragraph>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/PieceModel.js'
            start={34}
            end={63}
            showLines={true}
          />
          <Paragraph>
            These are some other functions.
            They do stuff.
            Thanks for Reading!
          </Paragraph>
        </Article>

      </Section>
    )
  }
}

export default Code;
