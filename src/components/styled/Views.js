import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  min-height: 80px;
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 40px;
`;

export const Article = styled.article`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 40px;
`;

export const Aside = styled.aside`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 40px;
`;

export const Figure = styled.figure`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 40px;
`;

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 40px;
`;


export const Row = styled.div`
  $ > * {
    display: inline-block;
  }
`;
