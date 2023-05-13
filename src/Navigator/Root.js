



import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs.js';


const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (

    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
      </RootStack.Group>
    </RootStack.Navigator>

  )
}

export default RootNavigator


