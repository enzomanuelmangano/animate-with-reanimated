import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Square from './components/Square';
import { N } from './constants';

export default function App() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(4 * Math.PI, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {new Array(N).fill(0).map((_, index) => {
        return <Square key={index} progress={progress} index={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
