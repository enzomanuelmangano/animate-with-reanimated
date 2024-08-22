import React from 'react';
import { App } from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppContainer = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
};

export default AppContainer;
