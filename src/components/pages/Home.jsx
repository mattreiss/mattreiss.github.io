import React from 'react';
import Prism from 'prismjs';
import {
  Button,
  TextButton
} from '../styled/Buttons';
import {
  Header,
  Nav,
  Article,
  Row
} from '../styled/Views';

class Home extends React.Component {
  state = {
  }

  componentWillMount() {
    let url = 'https://raw.githubusercontent.com/mattreiss/chess/chess/src/data/models/GameModel.js';
    fetch(url).then(res => res.text()).then(code => {
      this.setState({code}, () => Prism.highlightElement(this.code));
    }).catch(e => {
      console.log("fetch error", e);
    })
  }

  renderCode() {
    let { code } = this.state;
    return (
      <Article>
        <pre>
          <code className="language-javascript" ref={ref => this.code = ref} >
            {code}
          </code>
        </pre>
      </Article>
    )
  }

  render() {
    return (
      <div>
        <Header>
          <Row>
            <Button onClick={()=>console.log("click")} primary>
              primary
            </Button>
            <Button onClick={()=>console.log("click")} danger>
              danger
            </Button>
            <Button onClick={()=>console.log("click")} success>
              success
            </Button>
            <Button onClick={()=>console.log("click")} negative>
              negative
            </Button>
            <Button onClick={()=>console.log("click")} disabled danger>
              disabled
            </Button>
          </Row>
          <Row>
            <TextButton onClick={()=>console.log("click")} primary>
              text
            </TextButton>
            <TextButton onClick={()=>console.log("click")} danger>
              text
            </TextButton>
            <TextButton onClick={()=>console.log("click")} success>
              text
            </TextButton>
            <TextButton onClick={()=>console.log("click")} negative>
              text
            </TextButton>
            <TextButton onClick={()=>console.log("click")} disabled>
              text
            </TextButton>
          </Row>
        </Header>
        {this.renderCode()}
      </div>
    )
  }
}

export default Home;
