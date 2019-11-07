import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography
} from 'styled-system';

export default styled.label`
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  width: 130px;
  height: 40px;
  text-align: right;
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
