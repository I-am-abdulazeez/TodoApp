import { extendTheme, Theme } from 'native-base';

const config = {
  useColorMode: false,
  initialColorMode: 'light',
};

const colors = {
  primary: {
    50: '#EEF2F6',
    100: '#CFD9E7',
    200: '#B1C1D8',
    300: '#92A9C9',
    400: '#7491B9',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822',
  },
};

const fontConfig = {
  Inter: {
    thin: 'Inter-Thin',
    extraLight: 'Inter-ExtraLight',
    light: 'Inter-Light',
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
    extraBold: 'Inter-ExtraBold',
    black: 'Inter-Black',
  },
};

const fonts = {
  heading: 'Inter-SemiBold',
  body: 'Inter-Regular',
  mono: 'Inter',
};

export default extendTheme({ config, colors, fontConfig, fonts });
