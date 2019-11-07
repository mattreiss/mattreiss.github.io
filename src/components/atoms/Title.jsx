import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.h1`
  margin: ${props => props.theme.space.medium}px;
  font-size: ${props => props.theme.fontSizes.large}px;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
