import React from 'react';

import { StatusBar, useColorMode } from 'native-base';

import AppContainer from './src/components/AppContainer';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const { colorMode } = useColorMode();
  return (
    <AppContainer>
      <StatusBar
        animated
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode === 'light' ? '#fff' : '#223044'}
      />
      <MainScreen />
    </AppContainer>
  );
};

export default App;
