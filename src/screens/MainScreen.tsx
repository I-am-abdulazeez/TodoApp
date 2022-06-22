import React, { useCallback, useState } from 'react';

import {
  Box,
  Button,
  Center,
  Checkbox,
  StatusBar,
  Text,
  useColorMode,
  VStack,
} from 'native-base';

import ThemeToggler from '../components/ThemeToggler';
import TaskItem from '../components/TaskItem';

const MainScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState(false);

  const handleisChecked = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  return (
    <>
      <StatusBar
        animated
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode === 'light' ? '#ffffff' : '#223044'}
      />
      <Center
        flex={1}
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}>
        <VStack space={5} alignItems={'center'}>
          <Box>
            <TaskItem isDone={isChecked} onToggleCheckbox={handleisChecked} />
          </Box>
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
