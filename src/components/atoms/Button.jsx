import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.button`
  height: 40px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.medium}px;
  border: none;
  opacity: ${p => p.disabled ? 0.25 : 1};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};

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
