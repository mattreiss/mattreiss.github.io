import Colors from './colors';

const _scale = (base) => ({
  xxs: base / 3,
  xs: base / 2,
  small: base / 1.5,
  medium: base,
  large: base * 1.5,
  xl: base * 2,
  xxl: base * 3
});
export default class Theme {
  static DEFAULT = 'DefaultColors';
  static DARK = 'DarkColors';

  constructor() {
    this.init();
  }

  init(colors = Theme.DEFAULT) {
    this.currentTheme = colors;
    this.colors = Colors[colors] || Colors[Theme.DEFAULT];

    // https://system-ui.com/theme/
    this.sizes = _scale(100);
    this.iconSize = _scale(32);
    this.space = _scale(8);
    this.radii = _scale(8);
    this.fontSizes = _scale(18);
    this.shadow = {
      xs: '1px 1px 10px rgba(0,0,0,0.1)',
      small: '2px 2px 10px rgba(0,0,0,0.2)',
      medium: '3px 3px 10px rgba(0,0,0,0.3)',
      large: '4px 4px 10px rgba(0,0,0,0.4)',
      xl: '5px 5px 10px rgba(0,0,0,0.5)',
    }
  }

  static self = new Theme()
  static setTheme(newTheme) {
    Theme.self.init(newTheme);
  }
}
