import React, { Component } from 'react';
import Theme from '../../Themes';
import { AppBar } from '../Bars';

class ScreenView extends Component {
  state = {
    hideAppBar: false
  }
  lastScrollTop = 0
  onScroll = () => {
    console.log("scrolled", this.contentBody.scrollTop)
    let hideAppBar = this.contentBody.scrollTop > this.lastScrollTop
    this.setState({hideAppBar})
    this.lastScrollTop = this.contentBody.scrollTop
  }
  render() {
    let { hideAppBar } = this.state;
    return (
      <div >
        <div style={Theme.getStyles().AppBarContainer()}>
          <div style={hideAppBar ? Theme.getStyles().fadeOut() : Theme.getStyles().fadeIn()}>
            <AppBar />
          </div>
        </div>
        <div
          ref={ref => this.contentBody = ref}
          style={Theme.getStyles().ScreenView()}
          onScroll={this.onScroll}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ScreenView;
