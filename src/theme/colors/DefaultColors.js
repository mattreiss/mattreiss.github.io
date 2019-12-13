let Colors = {};

// color functions
Colors.rgba = (r,g,b,a) => 'rgba(' + r +',' + g + ',' + b + ',' + a + ')';
Colors.rgb = (r,g,b) => Colors.rgba(r,g,b,1);
Colors.gray = (v, a) => Colors.rgba(v,v,v, a || 1);

// constant colors
Colors.primary = '#2555D9';
Colors.danger = '#FF4C5B';
Colors.success = '#00BF6F';
Colors.negative = '#9A9A9F';
Colors.dark = Colors.gray(32);
Colors.light = Colors.gray(232, 0.5);
Colors.black = Colors.gray(0);
Colors.white = Colors.gray(255);

export default Colors;
