import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  list-style-type: none;
  overflow: scroll;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

const StyledLi = styled.li`
  display: flex;
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
        <StyledLi key={index}>
          {renderItem({item, index})}
        </StyledLi>
      )
    }
    return (
      <StyledUl
        {...this.props}
        flexDirection={horizontal ? 'row' : 'column'}>
        {items}
      </StyledUl>
    )
  }
}
