import React from 'react';
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
      </div>
    )
  }
}

export default Home;
