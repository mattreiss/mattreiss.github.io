import React from 'react';
import { connect } from 'react-redux';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';
import { ScreenView } from '../Views';

class ContactScreen extends React.Component {

  onClick = () => {
    this.props.showScreen('MainScreen');
  }

  render() {
    return (
      <ScreenView>
        <div onClick={this.onClick}>
          <h1>Matt Reiss</h1>
          <div style={{width: '100%'}}>
            <table style={{margin: 'auto'}}>
              <tbody>
                <tr>
                  <th>Email:</th>
                  <td><a href="mailto:imattreiss@gmail.com?Subject=Cool%20Portfolio" target="_top">imattreiss@gmail.com</a></td>
                </tr>
                <tr>
                  <th>LinkedIn:</th>
                  <td><a href="https://www.linkedin.com/in/matthewreiss/" >/matthewreiss</a></td>
                </tr>
                <tr>
                  <th>Github:</th>
                  <td><a href="https://www.github.com/mattreiss/" >/mattreiss</a></td>
                </tr>
                <tr>
                  <th>500px:</th>
                  <td><a href="https://www.500px.com/mattreiss/" >/mattreiss</a></td>
                </tr>
                <tr>
                  <th>Instagram:</th>
                  <td><a href="https://www.instagram.com/mattreiss/" >@mattreiss</a></td>
                </tr>
              </tbody>
            </table>
          </div>
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
