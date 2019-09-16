import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  Modal,
  Image
} from '../elements';
import {
  media
} from '../styled/_utils';
// import {
//   Button,
//   TextButton,
//   MenuButton
// } from '../styled/Buttons';
// import {
//   Header,
//   Nav,
//   Article,
// } from '../styled/Views';

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  margin: auto;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: 0px;
`;

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

const ModalImage = styled(Image).attrs(props => ({
  scale: 1,
  isSquare: false
}))`
  overflow: scroll;
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

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.mainPath = '/Photos';
    this.state = {
      items: [
        'russianridge2',
        'sharktooth',
        'slacker',
        'russianridge',
        'hmbtreetunnel',
        'crystalsprings',
        'tam',
        'panther',
        'delicate',
      ]
    }
  }

  onClickCloseModal = () => {
    this.props.history.push(this.mainPath);
  }

  shouldModalHide = () => {
    let path = this.props.location.pathname;
    return path.replace("/Photos", "").length < 2;
  }

  renderModalContent() {
    let path = this.props.location.pathname.replace("/Photos/", "");
    return (
      <ModalImage
        name={this.state.items[path]}
        quality="hd"
      />
    );
  }

  renderItems() {
    let { items } = this.state;
    let renderedItems = [];
    // eslint-disable-next-line
    for (let i in items) {
      renderedItems.push(
        <StyledLink key={i} to={`${this.mainPath}/${i}`}>
          <ResponsiveImage
            name={items[i]}
            quality="sd"
          />
        </StyledLink>
      )
    }
    return (
      <Grid>
        {renderedItems}
      </Grid>
    );
  }

  render() {
    let isModalHidden = this.shouldModalHide();
    return (
      <Container>
        {this.renderItems()}
        <Modal
          hidden={isModalHidden}
          onClickClose={this.onClickCloseModal}>
          {!isModalHidden && this.renderModalContent()}
        </Modal>
      </Container>
    )
  }
}

export default withRouter(Photos);
