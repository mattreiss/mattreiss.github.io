import React from 'react';
import { connect } from 'react-redux';
import { MainActions } from '../../Redux/Actions';
import Theme from '../../Themes';
import * as Screens from '../Screens';
import * as Contents from '../Contents';

class ScreenNavigator extends React.Component {

  renderScreen() {
    let { screen } = this.props.main;
    switch (screen) {
      case 'ContentScreen': return <Screens.ContentScreen />;
      case 'MainScreen':
      default: return <Screens.MainScreen />;
    }
  }

  render() {
    return (
      <div>
        {this.renderScreen()}
        <Contents.MenuContent />
      </div>
    )
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenNavigator)
