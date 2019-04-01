import React, { Component } from 'react';
import Theme from '../../Themes';
import { AppBar } from '../Bars';

class ScreenView extends Component {
  render() {
    let { hideAppBar } = this.props;
    return (
      <div >
        {!hideAppBar && (<AppBar />)}
        <div style={Theme.getStyles().ScreenView()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ScreenView;
