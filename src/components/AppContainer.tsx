import {NavigationContainer} from '@react-navigation/native';

import {NativeBaseProvider} from 'native-base';

import NativeBaseTheme from '../theme';

type Props = {
  children: React.ReactNode;
};

const AppContainer = (props: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={NativeBaseTheme}>
        {props.children}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
