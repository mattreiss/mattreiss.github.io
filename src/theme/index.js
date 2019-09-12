import Colors from './colors';

export default class Theme {
  static DEFAULT = {
    colors: 'DefaultColors',
  };

  constructor() {
    this.init();
  }

  init(theme = Theme.DEFAULT) {
    this.currentTheme = theme;
    this.colors = Colors[theme.colors] || Colors[Theme.DEFAULT.colors];
  }

  static self = new Theme()
  static setTheme(newTheme) {
    Theme.self.init(newTheme);
  }
}
