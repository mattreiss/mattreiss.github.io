import Theme from '../../Themes';
import DefaultStyles from './DefaultStyles';

// start with default styles
let Styles = Object.assign({}, DefaultStyles);

// Screens
Styles.MainScreen = () => ({
  backgroundColor: Theme.getColors().primary,
});

// Views
Styles.FilmStripView = () => ({
  backgroundColor: Theme.getColors().danger,
});

// Buttons


export default Styles;
