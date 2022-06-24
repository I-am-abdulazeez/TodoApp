import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';

import { NativeBaseTheme, NavTheme } from '../assets/theme';

type Props = {
  children: React.ReactNode;
};

const AppContainer = (props: Props) => {
  return (
    <NavigationContainer theme={NavTheme}>
      <NativeBaseProvider theme={NativeBaseTheme}>
        {props.children}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
