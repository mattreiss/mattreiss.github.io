import * as Colors from './Colors';
import * as Styles from './Styles';

let Theme = {
  colors: 'DarkColors',
  styles: 'DefaultStyles'
};

Theme.getColors = () => {
  return Colors[Theme.colors];
}

Theme.getStyles = () => {
  return Styles[Theme.styles];
}

Theme.setTheme = (obj) => {
  for (var key in obj) {
    Theme[key] = obj[key];
  }
}

export default Theme;
