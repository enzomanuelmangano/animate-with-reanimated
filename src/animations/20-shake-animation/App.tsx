import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useAnimatedShake } from './hooks/use-animated-shake';

export default function App() {
  const [count, setCount] = useState(0);

  const { shake, rStyle, isShaking } = useAnimatedShake();

  const onIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const onDecrement = useCallback(() => {
    setCount((c) => {
      if (c === 0) {
        shake();
        return 0;
      }
      return c - 1;
    });
  }, []);

  const rErrorTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(isShaking.value ? 'red' : 'black', {
        duration: 50,
      }),
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.Text style={[styles.counterText, rStyle, rErrorTextStyle]}>
        {count}
      </Animated.Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Entypo name="minus" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Entypo name="plus" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 98,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 64,
    right: 32,
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    height: 64,
    aspectRatio: 1,
    backgroundColor: '#0f41a4',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
