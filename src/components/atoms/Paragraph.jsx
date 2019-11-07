import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.p`
  font-size: ${props => props.theme.fontSizes.medium}px;
  padding-left: ${props => props.theme.space.small}px;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
