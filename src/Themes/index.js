import * as Colors from './Colors';
import * as Images from './Images';

let Theme = {
  colors: 'DefaultColors',
  images: 'DefaultImages'
};

Theme.getColors = () => {
  return Colors[Theme.colors];
}

Theme.getImages = () => {
  return Images[Theme.images];
}

Theme.setTheme = (obj) => {
  for (var key in obj) {
    Theme[key] = obj[key];
  }
}

export default Theme;
