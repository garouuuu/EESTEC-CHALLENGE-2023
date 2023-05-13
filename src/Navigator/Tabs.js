import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Profilescreen from '../screens/Profilescreen';
import Homescreen from '../screens/Homescreen';
import home from '../../assets/home.png';
import profile from '../../assets/user-profile.png';


const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  let redirect = route.name === 'ScreenSight' ? true : false;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "#4e92bf", // green color when active
        tabBarInactiveBackgroundColor: "#FFFFFF", // white color when inactive
        "display": "flex",
        "tabBarStyle": [
          {
            height: 80,
            borderTopWidth: 0,
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }],
        tabBarItemStyle: [{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',

        }],
        tabBarIconStyle: [{
          width: 35,
          height: 40,


        },
          null
        ],
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={home}
                style={{ width: 35, height: 35 }}
              />
            );
          } /* else if(route.name === 'Map'){
                return (
                    <Image
                      source={earth}
                      style={{ width: 35, height: 35 }}
                    />
                );
            } */
          else if (route.name === 'Profile') {
            return (
              <Image
                source={profile}
                style={{ width: 35, height: 35 }}
              />
            );
          }
        },

      })}
    >
      <Tab.Screen name="Home" options={{
        headerTitle: 'Explore new Places',

        headerStyle: {

          backgroundColor: '#4e92bf',

        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }} component={Homescreen} />

      <Tab.Screen name="Profile" options={{
        headerTitle: 'User',

        headerStyle: {

          backgroundColor: '#4e92bf',

        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }} component={Profilescreen} />


    </Tab.Navigator>
  );
}

export default TabNavigator;