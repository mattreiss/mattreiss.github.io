import React from 'react';
import * as material from 'styled-icons/material';

class Icon extends React.Component {
  render() {
    let {
      name,
      size,
      className
    } = this.props;
    let IconComponent = material[name];
    return IconComponent ? <IconComponent size={size} className={className} /> : <i>i</i>
  }
}

export default Icon;
