import React from 'react';

import {
  Box,
  Button,
  Center,
  StatusBar,
  Text,
  useColorMode,
  VStack,
} from 'native-base';

import ThemeToggler from '../components/ThemeToggler';

const MainScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StatusBar
        animated
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode === 'light' ? '#fff' : '#223044'}
      />
      <Center
        flex={1}
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}>
        <VStack space={5} alignItems={'center'}>
          <Box>
            <Text>Hello React Native</Text>
            <Button>Submit</Button>
          </Box>
        </VStack>
        <ThemeToggler />
      </Center>
    </>
  );
};

export default MainScreen;
