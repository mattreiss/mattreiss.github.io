import React, { Component } from 'react';
// import { Images } from '../../Constants';
import Theme from '../../Themes';

class MenuContent extends Component {
  render() {
    return (
      <div style={Theme.getStyles().MenuContent()}>
        Menu
      </div>
    );
  }
}

export default MenuContent;
