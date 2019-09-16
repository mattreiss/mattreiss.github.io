import styled from 'styled-components';
// import {
//   space,
//   layout,
//   color,
//   typography
// } from 'styled-system';
import {
  media
} from './_utils';
import { TextButton } from './Buttons';

export const Header = styled.header`
  width: 100%;
  padding: ${props => props.theme.space.xl}px;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  position: relative;
  ${media.desktop`
    padding: ${props => props.theme.space.large}px;
  `};
  ${media.phone`
    padding: ${props => props.theme.space.medium}px;
  `};
`;

export const Nav = styled.nav`
  $ > * {
    display: inline-block;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: auto;
  color:${props => props.theme.colors.black};
`;

export const Article = styled.article`
  margin: ${props => props.theme.space.xl}px;
  padding: ${props => props.theme.space.xxl}px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  border-radius: ${props => props.theme.radii.medium}px;
  overflow: scroll;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.medium}px;
  padding-left: ${props => props.theme.space.small}px;
`;

export const Title = styled.h1`
  margin: ${props => props.theme.space.medium}px;
  font-size: ${props => props.theme.fontSizes.large}px;
`;

export const SubTitle = styled.h3`
  margin: 0px;
  color: ${props => props.theme.colors.negative};
  margin-left: ${props => props.theme.space.medium}px;
  font-size: ${props => props.theme.fontSizes.small}px;
  font-weight: 600;
`;

export const Aside = styled.aside`

`;

export const Figure = styled.figure`
  ${({width, height}) => width && height && ({
    width,
    height
  })}
  overflow: hidden;
  margin: 0px;
`;

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
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

  & > * {
  }
`;

export const SideMenuClose = styled.span`
  background: rgba(0,0,0,0.1);
  position:fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  display: none;
  ${media.tablet`
    display: ${({hidden}) => hidden ? 'none' : 'block'};
  `};
`;

export const SideMenu = styled.span`
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.medium};
  padding: ${({theme}) => theme.space.xl}px;
  height: 100%;
  left: 0;
  top: 0;
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
