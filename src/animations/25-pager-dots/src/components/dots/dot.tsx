import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type DotProps = {
  index: number;
  activeIndex: SharedValue<number>;
  size: number;
};

export const Dot: React.FC<DotProps> = ({ index, activeIndex, size }) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isDotActive = index <= activeIndex.value;
    return {
      opacity: withTiming(isDotActive ? 1 : 0.3, {
        duration: 150,
      }),
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: 'white',
          borderRadius: size / 2,
        },
        rDotStyle,
      ]}
    />
  );
};
