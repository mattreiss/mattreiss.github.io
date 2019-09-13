import Colors from './colors';
import Sizes from './sizes';

export default class Theme {
  static DEFAULT = {
    colors: 'DefaultColors',
    sizes: 'DefaultSizes'
  };

  constructor() {
    this.init();
  }

  init(theme = Theme.DEFAULT) {
    this.currentTheme = theme;
    this.colors = Colors[theme.colors] || Colors[Theme.DEFAULT.colors];
    this.sizes = Sizes[theme.sizes] || Sizes[Theme.DEFAULT.sizes];
  }

  static self = new Theme()
  static setTheme(newTheme) {
    Theme.self.init(newTheme);
  }
}
