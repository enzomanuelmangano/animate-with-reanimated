import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ripple from './components/Ripple';

export default function App() {
  return (
    <View style={styles.container}>
      <Ripple
        style={styles.ripple}
        onTap={() => {
          console.log('tap');
        }}
      >
        <Text style={{ fontSize: 25 }}>Tap</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});
