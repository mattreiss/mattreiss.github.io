import React, { Component } from 'react';
import Theme from '../../Themes';

class ScreenView extends Component {
  render() {
    return (
      <div style={Theme.getStyles().ScreenView()}>
        {this.props.children}
      </div>
    );
  }
}

export default ScreenView;
