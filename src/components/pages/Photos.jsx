import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { media } from '../../tools/StyledUtils';
import {
  Image,
} from '../atoms';
import {
  Modal,
  ResponsiveImage
} from '../molecules'
// import {
// } from '../organisms';

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

const ModalImage = styled(Image).attrs(props => ({
  scale: 1,
  isSquare: false
}))`
  overflow: scroll;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.mainPath = '/Photos';
    this.state = {
      items: [
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

  getPhotoPath() {
    let path = this.props.location.pathname;
    return path.replace(this.mainPath, "");
  }

  getPhotoName() {
    let key =  this.getPhotoPath().replace("/", "");
    return this.state.items[key];
  }

  shouldModalHide = () => {
    return this.getPhotoPath().length <= 1;
  }

  renderModalContent() {
    return (
      <ModalImage
        name={this.getPhotoName()}
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
