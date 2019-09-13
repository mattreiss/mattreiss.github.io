import styled from 'styled-components';
import { Menu } from 'styled-icons/material';
import {
  themedColor,
  themedFontSize,
  themedIconSize
} from './_utils';


const getButtonStates = ({disabled, primary, theme}) => `
  opacity: ${disabled ? 0.25 : 1};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    filter: brightness(110%);
    color: ${!disabled && (primary ? theme.colors.negative : theme.colors.primary)};
  }

  &:active {
    filter: brightness(90%);
    color: ${!disabled && theme.colors.white};
  }

  &:active, &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${themedColor};
  font-size: ${themedFontSize}px;
  color: ${({theme}) => theme.colors.white};
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 8px;
  ${getButtonStates}
`;

export const TextButton = styled(Button)`
  color: ${themedColor};
  font-size: ${themedFontSize}px;
  background-color: transparent;

  &:active {
    filter: brightness(100%);
  }
`;

const createIconButton = (Icon) => styled(Icon).attrs(props => ({
  size: themedIconSize(props)
}))`
  color: ${themedColor};
  ${getButtonStates}
`;
;

export const MenuButton = createIconButton(Menu);

export const TestButton = styled(TextButton)`

`;
