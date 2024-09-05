import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { BACKGROUND_COLOR, data } from './constants';
import { WeeklyBarChart } from './components/weekly-bar-chart';

const App = () => {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WeeklyBarChart
        weeks={data}
        activeWeekIndex={activeWeekIndex}
        onWeekChange={setActiveWeekIndex}
      />
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
