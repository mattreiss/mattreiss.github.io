import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';


const SelectContainer = styled.select`
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.negative};
  font-size: ${p => p.theme.fontSizes.medium}px;
  width: 200px;
  height: 40px;
  text-align: center;
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

const Option = styled.option`
  padding: 8px;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.medium}px;
`;

class Select extends React.Component {
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
      <SelectContainer
        onChange={this.onChange}
        value={value}
        mx="medium"
        {...this.props}>
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}>
            {option.name}
          </Option>
        ))}
      </SelectContainer>
    )
  }
}

export default Select;
