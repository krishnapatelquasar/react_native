import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login.js';
import Register from './src/screens/Register.js';
import Dashboard from './src/screens/Dashboard.js';

function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a64ad',
  }
});

export default App;