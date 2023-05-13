import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import Root from './Root';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Root" component={Root} />
    </Stack.Navigator>
  );
};

export default AppNavigator;