import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';
import {
  Menu,
  Settings,
  Close
} from 'styled-icons/material';
import {
  themedIconSize,
  media
} from './_utils';


const getButtonStates = ({disabled, theme}) => `
  opacity: ${disabled ? 0.25 : 1};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }

  &:active, &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  ${color}
  ${layout}
  ${space}
  ${typography}
  height: ${props => props.theme.sizes.xs}px;
  border: none;
  border-radius: ${props => props.theme.radii.medium}px;
  ${getButtonStates}
`;

export const TextButton = styled(Button)`
  background-color: transparent;

  &:active {
  }

  &:hover {
    filter: brightness(110%);
    color: ${({disabled, theme}) => !disabled && theme.colors.primary};
  }
`;

const createIconButton = (Icon) => styled(Icon).attrs(props => ({
  size: themedIconSize(props)
}))`
  ${color}
  ${layout}
  ${space}
  ${getButtonStates}
`;
;

export const MenuButton = styled(createIconButton(Menu))`
  display: none;
  ${media.tablet`
    display:inline-block;
  `};
`;

export const SettingsButton = styled(createIconButton(Settings))`
  position: absolute;
  right: 0;
  margin-right: ${({theme}) => theme.space.xl}px;
  margin-top: ${({theme}) => theme.space.medium}px;
  ${media.desktop`
    margin-right: ${({theme}) => theme.space.large}px;
  `};
  ${media.tablet`
    margin-right: ${({theme}) => theme.space.medium}px;
    margin-top: 0px;
  `};
`;

export const CloseButton = styled(createIconButton(Close))``;

export const TestButton = styled(TextButton)`

`;
