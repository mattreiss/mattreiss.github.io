import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';
import { material } from 'styled-icons';

class Icon extends React.Component {
  render() {
    let {
      name
    } = this.props;
    let IconComponent = material[name];
    return <IconComponent />
  }
}

export default Icon;
