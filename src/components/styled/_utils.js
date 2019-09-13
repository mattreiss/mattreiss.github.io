import { css } from 'styled-components'

export const themedColor = (props) => {
  for (let key in props.theme.colors) {
    if (props[key] && typeof props.theme.colors[key] !== 'function') {
      return props.theme.colors[key];
    }
  };
  return null;
}

export const themedFontSize = (props) => {
  for (let key in props.theme.sizes.fontSize) {
    if (props[key] && typeof props.theme.sizes.fontSize[key] !== 'function') {
      return props.theme.sizes.fontSize[key];
    }
  };
  return props.theme.sizes.fontSize.normal;
}

export const themedIconSize = (props) => {
  for (let key in props.theme.sizes.iconSize) {
    if (props[key] && typeof props.theme.sizes.iconSize[key] !== 'function') {
      return props.theme.sizes.iconSize[key];
    }
  };
  return props.theme.sizes.iconSize.normal;
}

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
