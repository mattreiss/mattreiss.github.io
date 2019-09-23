import styled from 'styled-components';

export default styled.h3`
  margin: 0px;
  color: ${props => props.theme.colors.negative};
  margin-left: ${props => props.theme.space.medium}px;
  font-size: ${props => props.theme.fontSizes.small}px;
  font-weight: 600;
`;
