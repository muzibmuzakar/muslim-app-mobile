import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import Asmaul from "../screens/Asmaul";
import Alquran from "../screens/Alquran";
import Doaharian from "../screens/Doaharian";
import Niatsholat from "../screens/Niatsholat";
import DetailAlquran from "../screens/DetailAlquran";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alquran" component={Alquran} />
        <Stack.Screen name="DetailAlquran" component={DetailAlquran} />
        <Stack.Screen name="Doaharian" component={Doaharian} />
        <Stack.Screen name="Niatsholat" component={Niatsholat} />
        <Stack.Screen name="Asmaul" component={Asmaul} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
