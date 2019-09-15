import DefaultColors from './DefaultColors';

// start with default colors
let Colors = Object.assign({}, DefaultColors);

// constant colors
Colors.primary = Colors.rgb(80,150,200);
Colors.danger = Colors.rgb(220,130,30);
Colors.success = Colors.rgb(10,120,240);
Colors.negative = Colors.gray(144);
Colors.dark = Colors.gray(232);
Colors.light = Colors.gray(32);
Colors.black = Colors.gray(255);
Colors.white = Colors.gray(0);

export default Colors;
