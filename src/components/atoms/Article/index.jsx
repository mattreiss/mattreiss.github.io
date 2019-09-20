import styled from 'styled-components';

export default styled.article`
  margin: ${props => props.theme.space.xl}px;
  padding: ${props => props.theme.space.xxl}px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  border-radius: ${props => props.theme.radii.medium}px;
  overflow: scroll;
`;
