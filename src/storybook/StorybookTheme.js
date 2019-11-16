import { create } from '@storybook/theming';
import Theme from '../theme';

export default create({
  base: 'dark',

  colorPrimary: Theme.self.colors.primary,
  colorSecondary: Theme.self.colors.success,

  // UI
  appBg: 'rgb(30,30,30)',
  appContentBg: 'grey',
  appBorderColor: '#EAEAED',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(20,20,20,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: Theme.self.colors.primary,

  // Form colors
  inputBg: 'rgb(30,30,30)',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  // brandTitle: '365 Retail Markets',
  // brandUrl: 'https://adm.365retailmarkets.com',
  // brandImage: 'https://adm.365retailmarkets.com/static/images/365-logo-2.png',
});
