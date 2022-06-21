import React from 'react';

import { Box, Button, Center, Text, VStack } from 'native-base';

import ThemeToggler from '../components/ThemeToggler';

const MainScreen = () => {
  return (
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
    </Center>
  );
};

export default MainScreen;
