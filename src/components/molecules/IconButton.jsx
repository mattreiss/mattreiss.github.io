import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { themedIconSize } from '../../tools/StyledUtils';
import {
  Icon,
  Button
} from '../atoms';

const StyledIcon = styled(Icon).attrs(props => ({
  size: themedIconSize(props)
}))`
  ${color}
`;

class IconButton extends React.Component {
  render() {
    let {
      color,
      name,
      size,
      onClick,
      className
    } = this.props;
    return (
      <Button onClick={onClick} className={className}>
        <StyledIcon
          color={color}
          name={name}
          size={size}
        />
      </Button>
    )
  }
}

export default IconButton;
