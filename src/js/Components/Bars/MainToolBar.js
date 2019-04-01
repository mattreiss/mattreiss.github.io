import React from 'react';
import { withRouter } from 'react-router';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
// import { Menu, Posts } from '../../Constants';
// import Theme from '../../Themes';

class MainToolBar extends React.Component {
  goHome = () => {
    if (!this.props.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {
    let { currentMenuItem, menu, onClickMenu } = this.props;
    if (!currentMenuItem) {
      return (
        <Toolbar>
          <IconButton onClick={this.goHome} color="inherit">
            <Icon>arrow_back</Icon>
          </IconButton>
          <Typography
            variant="h6"
            color="inherit">
            Portfolio
          </Typography>
          {menu}
        </Toolbar>
      )
    }
    return (
      <Toolbar>
        <IconButton onClick={onClickMenu} color="inherit">
          <Icon>menu</Icon>
        </IconButton>
        <Typography
          variant="h6"
          color="inherit">
          Portfolio
        </Typography>
        {menu}
      </Toolbar>
    )
  }
}

export default withRouter(MainToolBar);
