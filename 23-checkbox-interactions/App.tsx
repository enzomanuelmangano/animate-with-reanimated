import { SafeAreaProvider } from 'react-native-safe-area-context';

import { App } from './src';
import { FontsProvider } from './src/providers/fonts-provider';

const AppContainer = () => {
  return (
    <FontsProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </FontsProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default AppContainer;
