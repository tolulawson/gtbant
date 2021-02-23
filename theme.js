import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

const styles = {
  global: {
    html: {
      bg: 'linear-gradient(111.74deg, #DE4F01 9.76%, #FCBF28 78.97%)',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
    },
    body: {
      bg: defaultTheme.colors.transparent,
      color: defaultTheme.colors.white,
    },
  },
};

/* Rectangle 10 */

// position: absolute;
// width: 1440px;
// height: 881px;

// background: linear-gradient(111.74deg, #DE4F01 9.76%, #FCBF28 78.97%);


const radii = {
  '4xl': '1.75rem',
};

const fonts = {
  heading: `Roboto, ${defaultTheme.fonts.heading}`,
  body: `Roboto, ${defaultTheme.fonts.body}`,
};

const colors = {
  gt: {
    50: '#ffecdd',
    100: '#ffcab1',
    200: '#fca782',
    300: '#f98652',
    400: '#f66322',
    500: '#dd4a09',
    600: '#ad3805',
    700: '#7c2803',
    800: '#4c1700',
    900: '#200400',
  },
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 'normal',
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  ...defaultTheme,
  styles,
  radii,
  fonts,
  colors,
  components,
  config,
};

const customTheme = extendTheme(overrides);

export default customTheme;
