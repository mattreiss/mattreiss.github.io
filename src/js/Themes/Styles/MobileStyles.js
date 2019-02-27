import Theme from '../../Themes';
import DefaultStyles from './DefaultStyles';

// start with default styles
let Styles = Object.assign({}, DefaultStyles);

// Metrics
// Styles.margin = Styles._scale(8);
// Styles.padding = Styles._scale(8);
// Styles.borderRadius = Styles._scale(8);
// Styles.fontSize = Styles._scale(16);
// Styles.buttonwidth = Styles._scale(120);
// Styles.buttonHeight = Styles._scale(20);

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
