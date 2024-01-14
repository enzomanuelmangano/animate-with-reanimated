import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sfCompactRoundedMedium from './assets/fonts/SF-Compact-Rounded-Medium.otf'; // medium
import { App } from './src';

const AppContainer = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load custom fonts using async Font.loadAsync
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'SF-Compact-Rounded-Medium': sfCompactRoundedMedium, // medium
      });
      setFontsLoaded(true);
    })();
  }, []);

  return <>{fontsLoaded && <App />}</>;
};

// eslint-disable-next-line import/no-default-export
export default AppContainer;
