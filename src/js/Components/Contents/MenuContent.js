import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainActions } from '../../Redux/Actions';
// import { Images } from '../../Constants';
import Theme from '../../Themes';

class MenuContent extends Component {

  state = {
    showMenu: false
  }

  onClickMenuItem = (item) => {
    // this.props.showScreen(item);
    this.setState({showMenu: false})
  }

  renderMenuItem = (item) => {
    let { screen } = this.props.main;
    let isActive = screen == item;
    return (
      <Link to={'/' + item}>
        <div onClick={() => this.onClickMenuItem(item)}>
         {item}
        </div>
      </Link>
    )
  }

  renderMenu() {
    return (
      <div style={Theme.getStyles().MenuContent()}>
        {this.renderMenuItem('main')}
        {this.renderMenuItem('content')}
      </div>
    )
  }

  render() {
    if (this.state.showMenu) return this.renderMenu();
    return (
      <div
        onClick={() => this.setState({showMenu: true})}
        style={Theme.getStyles().MenuContent()}>
        Menu
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuContent)
