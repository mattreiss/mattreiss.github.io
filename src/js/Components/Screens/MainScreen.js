import React from 'react';
import { connect } from 'react-redux';
import Theme from '../../Themes';
import { Posts } from '../../Constants';
import { ScreenView, MediaView } from '../Views';
// import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class MainScreen extends React.Component {

  onClickPost = (i) => {
    this.props.history.push('/post/' + i);
  }

  renderFeaturedPost() {
    let i = Posts.featured;
    let featuredPost = Posts[i];
    return (
      <div style={Theme.getStyles().FeaturedContent()}>
        <MediaView
          src={featuredPost.src}
          onClick={() => this.onClickPost(i)}
          scale={1}
        />
      </div>
    );
  }

  renderLibrary() {
    let posts = [];
    let scale = 3;
    while (Posts.featured % scale !== 0) scale++;
    for (let i = Posts.featured - 1; i >= 0; i--) {
      posts.push(
        <div style={Theme.getStyles().LibraryItem()}>
          <MediaView
            key={i}
            src={Posts[i].src}
            onClick={() => this.onClickPost(i)}
            scale={scale}
            isSquare={true}
          />
        <div />
          <h2 style={Theme.getStyles().LibraryItemTitle()}>
            {Posts[i].title}
          </h2>
        <div />
        </div>
      )
    }
    return (
      <div style={Theme.getStyles().LibraryContent()}>
        <div style={Theme.getStyles().LibraryGrid()}>
          {posts}
        </div>
      </div>
    );
  }

  render() {
    return (
      <ScreenView>
        {this.renderFeaturedPost()}
        {this.renderLibrary()}
      </ScreenView>
    );
  }
}

const mapStateToProps = (state) => {
  // let { } = state.main
  return {
    main: { }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
