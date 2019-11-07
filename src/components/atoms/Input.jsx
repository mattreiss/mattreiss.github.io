import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.negative};
  font-size: ${p => p.theme.fontSizes.medium}px;
  width: 200px;
  height: 40px;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
