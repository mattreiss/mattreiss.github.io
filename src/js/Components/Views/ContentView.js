import React, { Component } from 'react';
// import Theme from '../../Themes';

class ScreenView extends Component {
  render() {
    let { children, className } = this.props;
    return (
      <div className={"ScreenView " + className}>
        {children}
      </div>
    );
  }
}

export default ScreenView;
