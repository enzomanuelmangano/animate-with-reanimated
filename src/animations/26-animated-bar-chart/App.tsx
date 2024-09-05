import { useFonts } from 'expo-font';

import { App } from './src';

const AppContainer = () => {
  const [loaded] = useFonts({
    'FiraCode-Regular': require('./assets/fonts/FiraCode-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return <App />;
};

// eslint-disable-next-line import/no-default-export
export default AppContainer;
