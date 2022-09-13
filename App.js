import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Page d'accueil" }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="ColorPalette" component={ColorPalette} options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
