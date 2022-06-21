import React from 'react';

import { HStack, Switch, Text as NativeText, useColorMode } from 'native-base';

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="cehter">
      <NativeText>Dark</NativeText>
      <Switch onToggle={() => toggleColorMode} />
    </HStack>
  );
};

export default ThemeToggler;
