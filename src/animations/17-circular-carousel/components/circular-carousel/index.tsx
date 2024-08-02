import { FlatList, ImageProps } from 'react-native';
import { CircularCarouselListItem, ListItemWidth } from './list-item';
import { useSharedValue } from 'react-native-reanimated';

type CircularCarouselProps = {
  data: ImageProps['source'][];
};

const CircularCarousel: React.FC<CircularCarouselProps> = ({ data }) => {
  const contentOffset = useSharedValue(0);

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      scrollEventThrottle={16} // 60fps -> 16ms (1000ms / 60fps)
      onScroll={(event) => {
        contentOffset.value = event.nativeEvent.contentOffset.x;
      }}
      pagingEnabled
      snapToInterval={ListItemWidth}
      style={{
        position: 'absolute',
        bottom: 0,
        height: 300,
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 1.5 * ListItemWidth,
        // paddingRight: 1.5 * ListItemWidth,
        // paddingLeft: 1.5 * ListItemWidth,
      }}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <CircularCarouselListItem
            contentOffset={contentOffset}
            imageSrc={item}
            index={index}
          />
        );
      }}
    />
  );
};

export { CircularCarousel };
