import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from './components/dropdown';

const options = [
  { label: 'Charts', iconName: 'barschart' },
  { label: 'Book', iconName: 'book' },
  { label: 'Calendar', iconName: 'calendar' },
  { label: 'Camera', iconName: 'camera' },
];

const header = {
  label: 'Header',
  iconName: 'ellipsis1',
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Dropdown header={header} options={options} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
