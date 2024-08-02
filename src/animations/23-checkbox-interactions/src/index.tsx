import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Checkbox } from './components/checkbox';
import { useCuisines } from './hooks/useCuisines';

const App = () => {
  const { cuisines, toggleCuisine } = useCuisines();

  const { top: safeTop } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeTop + 24,
          paddingLeft: 24,
        },
      ]}>
      <StatusBar style="light" />
      <Text style={styles.title}>What are your favourite cuisines?</Text>
      <View style={styles.listContainer}>
        {cuisines.map(cuisine => {
          return (
            <Checkbox
              key={cuisine.id}
              label={cuisine.name}
              checked={cuisine.selected}
              onPress={() => {
                toggleCuisine(cuisine.id);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 24,
    paddingRight: 16,
  },
});

export { App };
