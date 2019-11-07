import React from 'react';
import {
  Icon,
  Button
} from '../atoms';

class IconButton extends React.Component {
  render() {
    let {
      color,
      name,
      size
    } = this.props;
    return (
      <Button {...this.props}>
        <Icon
          color={color}
          name={name}
          size={size}
        />
      </Button>
    )
  }
}

export default IconButton;
