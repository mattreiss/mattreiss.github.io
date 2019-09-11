import * as Colors from './Colors';

let Theme = {
  colors: 'DefaultColors'
};

Theme.getColors = () => {
  return Colors[Theme.colors];
}

Theme.setTheme = (obj) => {
  for (var key in obj) {
    Theme[key] = obj[key];
  }
}

export default Theme;
