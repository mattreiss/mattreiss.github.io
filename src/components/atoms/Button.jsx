import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.button`
  border-radius: ${props => props.theme.radii.medium}px;
  border: none;
  opacity: ${p => p.disabled ? 0.25 : 1};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  background-color: transparent;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }

  &:active, &:focus {
    outline: none;
  }

  ${color}
  ${layout}
  ${space}
  ${typography}
`;
