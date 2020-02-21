import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Snapkit from 'react-native-snapkit';

export default function App() {
  const [deviceName, setDeviceName] = React.useState('');

  React.useEffect(() => {
    Snapkit.getDeviceName().then(setDeviceName);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Device name: {deviceName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
