import styled from 'styled-components';
import {
  themedColor,
  themedFontSize,
  themedIconSize,
  media
} from './_utils';

export const Header = styled.header`
  width: 100%;
  min-height: 80px;
  ${media.giant`
    padding: 30px;
  `};
  ${media.desktop`
    padding: 20px;
  `};
  ${media.tablet`
    padding: 15px;
  `};
  ${media.phone`
    padding: 10px;
  `};
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
