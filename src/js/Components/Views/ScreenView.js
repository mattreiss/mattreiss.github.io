import React, { Component } from 'react';
// import Theme from '../../Themes';

class ScreenView extends Component {
  render() {
    let { children, className, style } = this.props;
    return (
      <div style={style} className={"ScreenView " + className}>
        {children}
      </div>
    );
  }
}

export default ScreenView;
