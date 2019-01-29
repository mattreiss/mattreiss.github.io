import React, { Component } from 'react';
import { ScreenView } from '../Views';
import { FeaturedContent, MenuContent } from '../Contents';
import Theme from '../../Themes';

class MainScreen extends Component {
  render() {
    return (
      <ScreenView>
        <MenuContent />
        <FeaturedContent />
      </ScreenView>
    );
  }
}

export default MainScreen;
