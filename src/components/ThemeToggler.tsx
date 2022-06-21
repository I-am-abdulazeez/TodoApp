import React from 'react';

import { HStack, Switch, Text, useColorMode } from 'native-base';

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack alignItems={'center'} space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
      />
      <Text>Light</Text>
    </HStack>
  );
};

export default ThemeToggler;
