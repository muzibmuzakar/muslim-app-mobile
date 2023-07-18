import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import colors from './app/config/colors';
import AppNavigator from './app/routes/AppNavigator';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <AppNavigator/>
  );
}


