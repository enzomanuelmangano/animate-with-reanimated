import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { BACKGROUND_COLOR, Stories } from './constants';
import {
  StoryListItem,
  StoryListItemHeight,
  StoryListItemWidth,
  WindowWidth,
} from './components/story-list-item';

const App = () => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);

  // useDerivedValue(() => {
  //   console.log(scrollOffset.value);
  // });
  const ListPadding = WindowWidth - StoryListItemWidth;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          height: StoryListItemHeight,
          width: '100%',
        }}>
        <Animated.ScrollView
          ref={animatedRef}
          horizontal
          snapToInterval={StoryListItemWidth}
          decelerationRate={'fast'}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} // 1/60fps = 16ms
          contentContainerStyle={{
            width: StoryListItemWidth * Stories.length + ListPadding,
          }}>
          {Stories.map((story, index) => {
            return (
              <StoryListItem
                index={index}
                imageSource={story.image}
                key={index}
                scrollOffset={scrollOffset}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { App };
