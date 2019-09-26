import React from 'react';
import { connect } from 'react-redux'
import { MainActions } from '../../data/redux/actions';
import Theme from '../../theme';
import {
  Select,
  Article,
  Section
} from '../atoms';

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
          <Select options={[
              {value: Theme.DEFAULT, name: 'Light'},
              {value: Theme.DARK, name: 'Dark'},
            ]}
            onChange={this.onChangeTheme}
            value={theme.currentTheme}
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
