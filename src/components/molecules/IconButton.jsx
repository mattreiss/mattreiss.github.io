import React from 'react';
import {
  Icon,
  Button
} from '../atoms';

class IconButton extends React.Component {
  filterProps() {
    const props = Object.assign({}, this.props);
    delete props.size;
    return props;
  }

  render() {
    let {
      color,
      name,
      size
    } = this.props;
    return (
      <Button {...this.filterProps()}>
        <Icon
          color={color}
          name={name}
          size={size || 'medium'}
        />
      </Button>
    )
  }
}

export default IconButton;
