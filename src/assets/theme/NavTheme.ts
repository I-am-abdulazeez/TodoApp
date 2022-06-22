import { DefaultTheme } from '@react-navigation/native';

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default NavTheme;
