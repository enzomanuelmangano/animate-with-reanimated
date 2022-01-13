import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ICON_SIZE = 20;

const clamp = (value: number, min: number, max: number) => {
  'worklet';
  return Math.min(Math.max(value, min), max);
};

const BUTTON_WIDTH = 170;

const SlidingCounter = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const [count, setCount] = useState(0);

  const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

  // wrapper function
  const incrementCount = useCallback(() => {
    // external library function
    setCount((currentCount) => currentCount + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const onPanGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: (event) => {
        translateX.value = clamp(
          event.translationX,
          -MAX_SLIDE_OFFSET,
          MAX_SLIDE_OFFSET
        );

        translateY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET);
      },
      onEnd: () => {
        if (translateX.value === MAX_SLIDE_OFFSET) {
          // Increment
          runOnJS(incrementCount)();
        } else if (translateX.value === -MAX_SLIDE_OFFSET) {
          // Decrement
          runOnJS(decrementCount)();
        } else if (translateY.value === MAX_SLIDE_OFFSET) {
          runOnJS(resetCount)();
        }

        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  }, []);

  const rPlusMinusIconStyle = useAnimatedStyle(() => {
    const opacityX = interpolate(
      translateX.value,
      [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
      [0.4, 0.8, 0.4]
    );

    const opacityY = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [1, 0]
    );

    return {
      opacity: opacityX * opacityY,
    };
  }, []);

  const rCloseIconStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, MAX_SLIDE_OFFSET],
      [0, 0.8]
    );

    return {
      opacity,
    };
  }, []);

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value * 0.1,
        },
        { translateY: translateY.value * 0.1 },
      ],
    };
  }, []);

  return (
    <Animated.View style={[styles.button, rButtonStyle]}>
      <Animated.View style={rPlusMinusIconStyle}>
        <AntDesign name="minus" color={'white'} size={ICON_SIZE} />
      </Animated.View>
      <Animated.View style={rCloseIconStyle}>
        <AntDesign name="close" color={'white'} size={ICON_SIZE} />
      </Animated.View>
      <Animated.View style={rPlusMinusIconStyle}>
        <AntDesign name="plus" color={'white'} size={ICON_SIZE} />
      </Animated.View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View style={[styles.circle, rStyle]}>
            <Text style={styles.countText}>{count}</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Animated.View>
  );
};

export default SlidingCounter;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: BUTTON_WIDTH,
    backgroundColor: '#111111',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  countText: {
    fontSize: 25,
    color: 'white',
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: '#232323',
    borderRadius: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
