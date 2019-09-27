import React from 'react';
import styled from 'styled-components';
import {
  Link,
  withRouter
} from 'react-router-dom';
import {
  Image,
} from '../atoms';
import {
  ResponsiveImage
} from '../molecules'
import {
  PageTemplate,
  ModalTemplate
} from '../templates';

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
      <PageTemplate>
          {this.renderItems()}
          <ModalTemplate
            hidden={isModalHidden}
            onClickClose={this.onClickCloseModal}
            content={!isModalHidden && this.renderModalContent()}
          />
      </PageTemplate>
    )
  }
}

export default withRouter(Photos);
