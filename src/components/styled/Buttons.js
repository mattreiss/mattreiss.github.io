import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme, negative}) => (negative && theme.colors.negative)};
  background-color: ${({theme, primary}) => (primary && theme.colors.primary)};
  background-color: ${({theme, danger}) => (danger && theme.colors.danger)};
  background-color: ${({theme, success}) => (success && theme.colors.success)};
  color: ${({theme}) => theme.colors.white};
  width: 100px;
  height: 40px;
  opacity: ${({disabled}) => (disabled ? 0.25 : 1)};
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 8px;

  &:hover {
    filter: brightness(110%);
    color: ${({theme, primary, disabled}) => !disabled && (primary ? theme.colors.negative : theme.colors.primary)};
  }

  &:active {
    filter: brightness(90%);
    color: ${({theme, disabled}) => !disabled && theme.colors.white};
  }

  &:active, &:focus {
    outline: none;
  }
`;

export const TextButton = styled(Button)`
  color: ${({theme}) => theme.colors.dark};
  color: ${({theme, negative}) => (negative && theme.colors.negative)};
  color: ${({theme, primary}) => (primary && theme.colors.primary)};
  color: ${({theme, danger}) => (danger && theme.colors.danger)};
  color: ${({theme, success}) => (success && theme.colors.success)};
  background-color: transparent;

  &:active {
    filter: brightness(100%);
  }
`;
