import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';


const Select = styled.select`
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

const Option = styled.option`
`;

class Dropdown extends React.Component {
  onChange = e => {
    let { onChange } = this.props;
    let { value } = e.target;
    if (typeof onChange == 'function') {
      return onChange(value)
    }
  }

  render() {
    let {
      options,
      value,
    } = this.props;
    return (
      <Select
        onChange={this.onChange}
        value={value}
        fontSize="medium"
        bg="negative"
        color="white"
        m="large"
        minWidth="medium"
        height="xs">
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}>
            {option.name}
          </Option>
        ))}
      </Select>
    )
  }
}

export default Dropdown;
