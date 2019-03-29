import React from 'react';
import { connect } from 'react-redux';
import { ScreenView } from '../Views';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

class ContactScreen extends React.Component {

  onClick = () => {
    this.props.showScreen('MainScreen');
  }

  render() {
    return (
      <ScreenView>
        <div onClick={this.onClick}>
          Contact Screen
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen)
