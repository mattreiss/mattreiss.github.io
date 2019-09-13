let Sizes = {};

Sizes._scale = (base) => ({
  xxs: base / 3,
  xs: base / 2,
  small: base / 1.5,
  normal: base,
  large: base * 1.5,
  xl: base * 2,
  xxl: base * 3
});

Sizes.margin = Sizes._scale(8);
Sizes.padding = Sizes._scale(8);
Sizes.fontSize = Sizes._scale(14);
Sizes.iconSize = Sizes._scale(32);

export default Sizes;
