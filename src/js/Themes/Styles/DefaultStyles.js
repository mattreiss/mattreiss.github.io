import Theme from '../../Themes';

let Styles = {};

Styles._scale = (v) => ({
  xxs: v / 4,
  xs: v / 3,
  s: v / 2,
  m: v * 2,
  l: v * 3,
  xl: v * 4,
  xxl: v * 5,
});

// Metrics
Styles.margin = Styles._scale(8);
Styles.padding = Styles._scale(8);
Styles.borderRadius = Styles._scale(8);
Styles.fontSize = Styles._scale(16);
Styles.buttonWidth = Styles._scale(120);
Styles.buttonHeight = Styles._scale(20);


// Screens

// Contents
Styles.MenuContent= () => ({
  backgroundColor: Theme.getColors().rgba(10,10,10,0.1),
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  width: 'calc(100% - ' + Styles.padding.m + ')',
  height: Styles.buttonHeight.m,
  textAlign: 'left',
  fontSize: Styles.fontSize.m,
  padding: Styles.padding.m
});

Styles.FeaturedContent= () => ({
  backgroundColor: Theme.getColors().defaultBackground,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

Styles.LibraryContent= () => ({
  backgroundColor: Theme.getColors().defaultBackground,
  width: '100%',
});

Styles.LibraryTitle = () => ({
  backgroundColor: Theme.getColors().headerBackground,
  color: Theme.getColors().headerText,
  padding: Styles.margin.xl,
  fontSize: Styles.fontSize.m,
});

Styles.LibraryGrid = () => ({
  width: '100%',
  fontSize: 0,
});

Styles.LibraryItem = () => ({
  display: 'inline-block',
  overflow: 'hidden'
});

// Views
Styles.ScreenView = () => ({
  backgroundColor: Theme.getColors().defaultBackground,
  color: Theme.getColors().defaultText,
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  overflowY: 'scroll',
  overflowX: 'hidden',
  textAlign: 'center'
});

Styles.ImageViewContainer = (styles) => ({
  ...styles,

});

Styles.ImageView = (styles) => ({
  ...styles,

});

// Buttons


export default Styles;
