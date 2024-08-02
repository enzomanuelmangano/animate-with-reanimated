import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Palette } from './constants';
import { SplitButton } from './components/split-button';

const App = () => {
  const [splitted, setSplitted] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SplitButton
        splitted={splitted}
        mainAction={{
          label: 'Stop',
          onPress: () => {
            console.log('Stop');
            setSplitted(true);
          },
          backgroundColor: Palette.card,
        }}
        leftAction={{
          label: 'Resume',
          onPress: () => {
            console.log('Resume');
            setSplitted(false);
          },
          backgroundColor: Palette.card,
        }}
        rightAction={{
          label: 'Finish',
          onPress: () => {
            console.log('Finish');
            setSplitted(false);
          },
          backgroundColor: Palette.highlight,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { App };
