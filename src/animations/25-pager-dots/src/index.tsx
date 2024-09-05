import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { Dots } from './components/dots';

const DOTS_COUNT = 3;

const App = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  // we need to find the scrollOffset

  // once we have the scrollOffset we can find the active index

  const scrollAnimatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollAnimatedRef);

  const activeIndex = useDerivedValue(() => {
    return Math.round(scrollOffset.value / windowWidth);
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.ScrollView
        horizontal
        ref={scrollAnimatedRef}
        decelerationRate={'fast'}
        snapToInterval={windowWidth}>
        {new Array(DOTS_COUNT).fill(0).map((_, index) => (
          <View
            key={index}
            style={{
              width: windowWidth,
              height: windowHeight,
              backgroundColor: 'white',
              opacity: index * 0.1,
            }}
          />
        ))}
      </Animated.ScrollView>
      <View
        style={{
          position: 'absolute',
        }}>
        <Dots count={DOTS_COUNT} activeIndex={activeIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { App };
