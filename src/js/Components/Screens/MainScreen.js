import React from 'react';
import { connect } from 'react-redux';
import Theme from '../../Themes';
import { Posts } from '../../Constants';
import { ScreenView, ImageView, VideoView } from '../Views';
import { MainActions } from '../../Redux/Actions';
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
        {featuredPost.img ? (
          <ImageView
            src={featuredPost.img}
            onClick={() => this.onClickPost(i)}
            scale={1}
          />
        ) : (
          <VideoView
            src={featuredPost.video}
            onClick={() => this.onClickPost(i)}
            scale={1}
          />
        )}
      </div>
    );
  }

  renderLibrary() {
    let posts = [];
    let scale = 3;
    while (Posts.featured % scale !== 0) scale++;
    for (let i = Posts.featured - 1; i >= 0; i--) {
      posts.push(
        Posts[i].img ? (
            <ImageView
              key={i}
              src={Posts[i].img}
              style={Theme.getStyles().LibraryItem()}
              onClick={() => this.onClickPost(i)}
              scale={scale}
              isSquare={true}
            />
        ) : (
          <VideoView
            src={Posts[i].video}
            onClick={() => this.onClickPost(i)}
            scale={1}
          />
        )
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
  let { screen } = state.main
  return {
    main: { screen }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showScreen: (screen, screenProps) => dispatch(MainActions.showScreen(screen, screenProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
