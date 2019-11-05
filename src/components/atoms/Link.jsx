import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

const StyledA = styled.a`
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

const StyledLink = styled(Link)`
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

export default (props) => {
  const LinkComponent = props.href ? StyledA : StyledLink;
  return (
    <LinkComponent {...props} />
  )
}
