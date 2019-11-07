import React from 'react';
import * as material from 'styled-icons/material';
import * as remixFill from 'styled-icons/remix-fill';
import styled from 'styled-components';
import {
  space,
  layout,
  color
} from 'styled-system';
import { themedIconSize } from '../../tools/StyledUtils';

class BaseIcon extends React.Component {
  render() {
    let {
      name,
      size,
      className
    } = this.props;
    let IconComponent = material[name] || remixFill[name];
    return IconComponent ? <IconComponent size={size} className={className} /> : <i>i</i>
  }
}

const Icon = styled(BaseIcon).attrs(props => ({
  size: themedIconSize(props)
}))`
  ${space}
  ${layout}
  ${color}
`;


export default Icon;
