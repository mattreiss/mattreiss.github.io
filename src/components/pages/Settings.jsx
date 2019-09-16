import React from 'react';
import { connect } from 'react-redux'
import { MainActions } from '../../data/redux/actions';
import Theme from '../../theme';
import {
  Dropdown
} from '../elements';
// import {
//   Button,
//   TextButton,
//   MenuButton
// } from '../styled/Buttons';
import {
  Article,
  Section
} from '../styled/Views';

class Settings extends React.Component {
  onChangeTheme = (theme) => {
    Theme.self.init(theme);
    this.props.setTheme(Theme.self);
  }
  render() {
    let { theme } = this.props.main;
    return (
      <Section>
        <Article>
          <Dropdown
            onChange={this.onChangeTheme}
            value={theme.currentTheme}
            options={[
              {value: Theme.DEFAULT, name: 'Light'},
              {value: Theme.DARK, name: 'Dark'},
            ]}
          />
        </Article>
      </Section>
    )
  }
}

const mapStateToProps = (state) => {
  let { theme } = state.main
  return {
    main: { theme }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => dispatch(MainActions.setTheme(theme)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
