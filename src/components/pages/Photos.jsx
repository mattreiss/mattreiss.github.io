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
  text-decoration: none;
  margin: 0px;
`;

const ModalImage = styled(Image).attrs(props => ({
  scale: 1,
  isSquare: false
}))`
  overflow: scroll;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const ThumbImage = styled(Image).attrs(props => ({
  fillHeight: 195,
  quality: 'sd',
}))`
  margin: 2px;
  border: 1px solid ${p => p.isSelected ? 'green' : 'transparent'};
`;

const SelectedImage = styled(Image).attrs(props => ({
  scale: 1,
  isSquare: false,
  quality: 'hd'
}))`
`;

const FilmStrip = styled.div`
  width: 100vw;
  height: 200px;
  backgroud-color: rgb(23,23,23);
  overflow-x: scroll;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  & > * {
    display: inline-flex;
  }
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.mainPath = '/Photos';
    this.state = {
      items: [
        'riverofdreams',
        'halfdome',
        'hotcreek',
        'mammoth',
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

  renderGrid() {
    const isModalHidden = this.shouldModalHide();
    const { items } = this.state;
    const renderedItems = [];
    // eslint-disable-next-line
    for (let i in items) {
      renderedItems.push(
        <StyledLink key={i} to={`${this.mainPath}/${i}`}>
          <ResponsiveImage
            isSquare
            name={items[i]}
            quality="sd"
          />
        </StyledLink>
      )
    }
    return (
      <Grid>
        {renderedItems}
        <ModalTemplate
          hidden={isModalHidden}
          onClickClose={this.onClickCloseModal}
          content={!isModalHidden && (
            <ModalImage
              name={this.getPhotoName()}
              quality="hd"
            />
          )}
        />
      </Grid>
    );
  }

  renderFilmStrip() {
    const { items, selectedItem } = this.state;
    const renderedItems = [];
    console.log("selectedItem", selectedItem);
    // eslint-disable-next-line
    for (let i in items) {
      renderedItems.push(
        <div
          key={i}
          onClick={() => this.setState({selectedItem: i})}>
          <ThumbImage
            name={items[i]}
            isSelected={i === selectedItem}
          />
        </div>
      )
    }
    return (
      <Content>
        {selectedItem && (
          <SelectedImage
            name={items[selectedItem]}
          />
        )}
        <FilmStrip>
          {renderedItems}
        </FilmStrip>
      </Content>
    );
  }

  render() {
    const { toggleGrid } = this.state;
    return (
      <PageTemplate>
          {!toggleGrid ? this.renderGrid() : this.renderFilmStrip()}
      </PageTemplate>
    )
  }
}

export default withRouter(Photos);
