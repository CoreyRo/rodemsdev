export const breakpoints = {
  SM_PHONE: 420,
  PHONE: 421,
  TABLET: 768,
  TABLET_LANDSCAPE: 1024,
  SM_DESKTOP: 1366,
  DESKTOP: 1680,
  LG_DESKTOP: 1920,
  DESKTOP_MAX: 1744,
};

export const cssBreakpoints = {
  SM_PHONE: `(max-width: ${breakpoints.SM_PHONE}px)`,
  PHONE: `(min-width: ${breakpoints.PHONE}px)`,
  TABLET: `(min-width: ${breakpoints.TABLET}px)`,
  TABLET_LANDSCAPE: `(min-width: ${breakpoints.TABLET_LANDSCAPE}px)`,
  SM_DESKTOP: `(min-width: ${breakpoints.SM_DESKTOP}px)`,
  DESKTOP: `(min-width: ${breakpoints.DESKTOP}px)`,
  LG_DESKTOP: `(min-width: ${breakpoints.LG_DESKTOP}px)`,
  DESKTOP_MAX: `(min-width: ${breakpoints.DESKTOP_MAX}px)`,
};

export const color = {
  DARKEST: '#060606',
  DARKER: '#161616',
  DARK: '#2c2c2c',
  NEUTRAL: '#7a7a7a',
  LIGHTEST: '#f1f1f1',
  BLUE_LITE: '#4bb9ff',
  BLUE: '#049cfc',
  DARK_BLUE: '#066099',
  YELLOW: '#f8f8af',
};
