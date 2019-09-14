import styled from 'styled-components';
import {
  themedColor,
  themedFontSize,
  themedIconSize,
  media
} from './_utils';
import { TextButton } from './Buttons';

export const Header = styled.header`
  width: 100%;
  padding: 30px;
  ${media.giant`
    padding: 25px;
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
  $ > * {
    display: inline-block;
  }
`;

export const Section = styled.section`

`;

export const Article = styled.article`

`;

export const Aside = styled.aside`

`;

export const Figure = styled.figure`

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

export const Menu = styled.span`
  display: inline-block;
  ${media.tablet`
    display: none;
  `};
  ${media.phone`
    display: none;
  `};
`;

export const SideMenu = styled.span`
  background-color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.sizes.padding.large}px;
  left: 0;
  position: fixed;
  display: none;
  ${media.tablet`
    display: ${({hidden}) => hidden ? 'none' : 'block'};
  `};

  ${TextButton} {
    display: block;
    text-align: left;
  }
`;
