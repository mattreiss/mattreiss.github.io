import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

const StyledUl = styled.ul`
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  display: flex;
  flex-direction: ${p => p.flexDirection};
  list-style-type: none;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

const StyledLi = styled.li`
  display: flex;
  padding: 8px;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

export default class List extends React.Component {
  render() {
    const { data, renderItem, horizontal } = this.props;
    let items = [];
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      items.push(
        <StyledLi>
          {renderItem({item, index})}
        </StyledLi>
      )
    }
    return (
      <StyledUl flexDirection={horizontal ? 'row' : 'column'}>
        {items}
      </StyledUl>
    )
  }
}
