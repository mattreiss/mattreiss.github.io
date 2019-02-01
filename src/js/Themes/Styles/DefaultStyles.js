import Theme from '../../Themes';

let Styles = {};

// Metrics
Styles._set = (k, v) => {
  Styles[k] = {
    xxs: v / 4,
    xs: v / 3,
    s: v / 2,
    m: v * 2,
    l: v * 3,
    xl: v * 4,
    xxl: v * 5,
  }
}
Styles._set('margin', 8);
Styles._set('padding', 8);
Styles._set('borderRadius', 8);
Styles._set('fontSize', 16);
Styles._set('buttonWidth', 120);
Styles._set('buttonHeight', 20);


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
  padding: Styles.margin.m,
  fontSize: Styles.fontSize.m,
});

Styles.LibraryGrid = () => ({
  width: '100%',
});

Styles.LibraryItem = (size) => ({
  backgroundColor: Theme.getColors().primary,
  display: 'inline-block',
  width: size || Styles.buttonWidth.l,
  height: size || Styles.buttonWidth.l,
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
});

Styles.FilmStripView = () => ({
  backgroundColor: Theme.getColors().defaultBackground,
});

// Buttons


export default Styles;
