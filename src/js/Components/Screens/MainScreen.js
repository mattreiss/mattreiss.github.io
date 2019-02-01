import React, { Component } from 'react';
import { ScreenView } from '../Views';
import {
  FeaturedContent,
  MenuContent,
  LibraryContent
} from '../Contents';
// import Theme from '../../Themes';

class MainScreen extends Component {
  render() {
    return (
      <ScreenView>
        <MenuContent />
        <FeaturedContent />
        <LibraryContent />
      </ScreenView>
    );
  }
}

export default MainScreen;
