import React from 'react';
import Prism from 'prismjs';
import {
  CodeSnippet,
  MainMenu
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
  Row
} from '../styled/Views';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <Article>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/GameModel.js'
            start={23}
            end={50}
            showLines={true}
          />
        </Article>
        <Article>
          <CodeSnippet
            url='https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/GameModel.js'
            start={8}
            end={18}
            showLines={true}
          />
        </Article>
      </div>
    )
  }
}

export default Home;
