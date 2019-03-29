import React from 'react';
import { connect } from 'react-redux';
import { ScreenView } from '../Views';
import {
  FeaturedContent,
  LibraryContent
} from '../Contents';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class MainScreen extends React.Component {

  onClick = () => {
    this.props.showScreen('ContentScreen');
  }

  render() {
    return (
      <ScreenView>
        <FeaturedContent />
        <LibraryContent />
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
