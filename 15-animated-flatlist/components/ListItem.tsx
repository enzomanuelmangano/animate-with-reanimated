import React from 'react';
import { StyleSheet, View, ViewToken } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item.id)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View
        style={[
          {
            height: 80,
            width: '90%',
            backgroundColor: '#78CAD2',
            alignSelf: 'center',
            borderRadius: 15,
            marginTop: 20,
          },
          rStyle,
        ]}
      />
    );
  }
);

const styles = StyleSheet.create({
  container: {},
});

export { ListItem };
