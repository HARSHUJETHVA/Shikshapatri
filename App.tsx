import React from 'react';
import Navigator from './app/src/navigator/Navigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <Navigator />
    </>
  );
};

export default App;
