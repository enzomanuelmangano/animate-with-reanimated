import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Color from 'color';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type DropdownItemType = {
  label: string;
  iconName: string;
};

type DropdownListItemProps = DropdownItemType & {
  index: number;
  dropdownItemsCount: number;
  isExpanded: Animated.SharedValue<boolean>;
};

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  label,
  iconName,
  index,
  dropdownItemsCount,
  isExpanded,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const DropdownListItemHeight = 85;
  const Margin = 10;

  const fullDropdownHeight =
    dropdownItemsCount * (DropdownListItemHeight + Margin);

  const collapsedTop = fullDropdownHeight / 2 - DropdownListItemHeight;
  const expandedTop = (DropdownListItemHeight + Margin) * index;

  const expandedScale = 1;
  const collapsedScale = 1 - index * 0.08;

  const expandedBackgroundColor = '#1B1B1B';
  const collapsedBackgroundColor = Color(expandedBackgroundColor)
    .lighten(index * 0.25)
    .hex();

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor
      ),
      top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
      transform: [
        {
          scale: withSpring(isExpanded.value ? expandedScale : collapsedScale),
        },
        {
          translateY: fullDropdownHeight / 2,
        },
      ],
    };
  }, []);

  const isHeader = index === 0;

  const rLeftIconOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
    };
  }, [isHeader]);

  const rHeaderArrowIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(isHeader && isExpanded.value ? '90deg' : '0deg'),
        },
      ],
    };
  });

  return (
    <Animated.View
      onTouchEnd={() => {
        if (isHeader) isExpanded.value = !isExpanded.value;
      }}
      style={[
        {
          zIndex: dropdownItemsCount - index,
          position: 'absolute',
          width: windowWidth * 0.95,
          height: DropdownListItemHeight,
          borderRadius: 10,
        },
        rStyle,
      ]}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.iconContainer,
            {
              left: 15,
            },
            rLeftIconOpacityStyle,
          ]}
        >
          <AntDesign name={iconName as any} size={25} color="#D4D4D4" />
        </Animated.View>
        <Text style={styles.label}>{label}</Text>
        <Animated.View
          style={[
            styles.iconContainer,
            rHeaderArrowIconStyle,
            {
              right: 15,
              backgroundColor: 'transparent',
            },
          ]}
        >
          <MaterialIcons
            name={isHeader ? 'arrow-forward-ios' : 'arrow-forward'}
            size={25}
            color={'#D4D4D4'}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#D4D4D4',
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  iconContainer: {
    position: 'absolute',
    width: 45,
    aspectRatio: 1,
    backgroundColor: '#111',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { DropdownListItem };
export type { DropdownItemType };
