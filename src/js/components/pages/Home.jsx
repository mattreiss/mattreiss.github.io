import React from 'react';
import Buttons from '../styled/Buttons';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Buttons.Default onClick={()=>console.log("click")}>text</Buttons.Default>
      </div>
    )
  }
}

export default Home;
