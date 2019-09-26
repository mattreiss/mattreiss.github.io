import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { media } from '../../tools/StyledUtils';
import { Image } from '../atoms';

const MobileImage = styled(Image).attrs(props => ({
  scale: 1,
  isSquare: true
}))`
  display: none;
  ${media.phone`
    display: inline-block;
  `};
`;

const TabletImage = styled(Image).attrs(props => ({
  scale: 2,
  isSquare: true
}))`
  display: none;
  ${media.tablet`
    display: inline-block;
  `};
  ${media.phone`
    display: none;
  `};
`;

const DesktopImage = styled(Image).attrs(props => ({
  scale: 3,
  isSquare: true
}))`
  display: none;
  ${media.desktop`
    display: inline-block;
  `};
  ${media.tablet`
    display: none;
  `};
`;

const GiantImage = styled(Image).attrs(props => ({
  scale: 4,
  isSquare: true
}))`
  display: inline-block;
  ${media.desktop`
    display: none;
  `};
`;

const ResponsiveImage = (props) => {
  return (
    <React.Fragment>
      <MobileImage {...props} />
      <TabletImage {...props} />
      <DesktopImage {...props} />
      <GiantImage {...props} />
    </React.Fragment>
  )
}

export default ResponsiveImage;
