import DefaultColors from './DefaultColors';

// start with default colors
let Colors = Object.assign({}, DefaultColors);

// constant colors
Colors.primary = Colors.rgb(10,150,200);
Colors.danger = Colors.rgb(220,130,30);
Colors.success = Colors.rgb(10,120,240);
Colors.negative = Colors.gray(64);
Colors.dark = Colors.gray(32);
Colors.light = Colors.gray(128);
// Colors.transparent = Colors.rgba(0,0,0,0);
Colors.white = Colors.gray(255);
// Colors.black = Colors.gray(0);

// text colors
Colors.defaultText = Colors.white;
Colors.headerText = Colors.white;
Colors.footerText = Colors.white;

// icon colors
Colors.defaultIcon = Colors.white;

// background colors
Colors.defaultBackground = Colors.dark;
Colors.modalBackground = Colors.primary;
Colors.headerBackground = Colors.dark;
Colors.footerBackground = Colors.light;
Colors.contentBackground = Colors.negative;

export default Colors;
