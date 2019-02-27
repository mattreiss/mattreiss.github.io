let Colors = {};

// color functions
Colors.rgba = (r,g,b,a) => 'rgba(' + r +',' + g + ',' + b + ',' + a + ')';
Colors.rgb = (r,g,b) => Colors.rgba(r,g,b,1);
Colors.gray = (v) => Colors.rgb(v,v,v);

// constant colors
Colors.primary = '#2555D9';
Colors.danger = '#FF4C5B';
Colors.success = '#00BF6F';
Colors.negative = '#9A9A9F';
Colors.dark = Colors.rgba(10,10,10, 0.9);
Colors.transparent = Colors.rgba(0,0,0,0);
Colors.white = Colors.gray(255);
Colors.black = Colors.gray(0);

// text colors
Colors.defaultText = Colors.black;
Colors.headerText = Colors.white;
Colors.footerText = Colors.black;

// icon colors
Colors.defaultIcon = Colors.white;

// background colors
Colors.defaultBackground = Colors.white;
Colors.modalBackground = Colors.primary;
Colors.headerBackground = Colors.dark;
Colors.footerBackground = Colors.white;
Colors.contentBackground = Colors.negative;

export default Colors;
