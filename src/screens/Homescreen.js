



import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Eikones from '../components/Eikones';

const icon = require('../../assets/left.png');

const Homescreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{ marginRight: 10 }}>

          <Image source={icon} style={{ width: 40, height: 40, backgroundColor: '#E5E7EB', borderRadius: 20, }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);



  locations = [
    {
      id: "12",
      title: "Perioxes",
      description: "Kentriki ellada",
      locations: [
        {
          id: 123,
          ImageSource: 'https://i.imgur.com/UPrs1EWl.jpg',
          title: "Athina",
          rating: 4.5,
          genre: "japanese",
          address: "123 main st",
          short_descriptio: "this is a test",
          long: 20,
          lat: 0,
          eikones: [
            { src: 'https://i.imgur.com/UYiroysl.jpg' },
            { key: 0, src: 'https://i.imgur.com/UPrs1EWl.jpg' },
            { key: 1, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 2, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 3, src: 'https://i.imgur.com/0M82nEIl.jpg' }
          ]

        },
        {

          id: 124,
          ImageSource: 'https://i.imgur.com/0M82nEIl.jpg',
          title: "Athina",
          rating: 4.5,
          genre: "japanese",
          address: "123 main st",
          short_descriptio: "this is a test",
          long: 20,
          lat: 0,
          eikones: [
            { key: 0, src: 'https://i.imgur.com/UPrs1EWl.jpg' },
            { key: 1, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 2, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 3, src: 'https://i.imgur.com/0M82nEIl.jpg' }
          ]

        }
      ]


    }
    ,
    {
      id: "13",
      title: "Perioxes",
      description: "Kentriki ellada",
      locations: [
        {
          id: 125,
          ImageSource: 'https://i.imgur.com/0M82nEIl.jpg',
          title: "Athina",
          rating: 4.5,
          genre: "japanese",
          address: "123 main st",
          short_descriptio: "this is a test",
          long: 20,
          lat: 0,
          eikones: [
            { key: 0, src: 'https://i.imgur.com/UYiroysl.jpg' },
            { key: 1, src: 'https://i.imgur.com/UPrs1EWl.jpg' },
            { key: 2, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 3, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 4, src: 'https://i.imgur.com/0M82nEIl.jpg' }
          ]

        },
        {

          id: 126,
          ImageSource: 'https://i.imgur.com/0M82nEIl.jpg',
          title: "Athina",
          rating: 4.5,
          genre: "japanese",
          address: "123 main st",
          short_descriptio: "this is a test",
          long: 20,
          lat: 0,
          eikones: [
            { key: 0, src: 'https://i.imgur.com/UYiroysl.jpg' },
            { key: 1, src: 'https://i.imgur.com/UPrs1EWl.jpg' },
            { key: 2, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 3, src: 'https://i.imgur.com/0M82nEIl.jpg' },
            { key: 4, src: 'https://i.imgur.com/0M82nEIl.jpg' }
          ]

        }
      ]


    }
  ];

  return (
    <View>

      <ScrollView>
        {
          locations.map((location, index) =>
            <Eikones key={index} {...location} navigation={navigation} />
          )
        }
      </ScrollView>
    </View>
  );
};

export default Homescreen;
