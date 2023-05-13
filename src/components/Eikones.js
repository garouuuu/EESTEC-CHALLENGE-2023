import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Kartela from './Kartela';

const Eikona = require("../../assets/372551.jpg");
const icon = require("../../assets/left.png");

const Eikones = ({ id, title, description, navigation, ...params }) => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

      </View>
      <Text style={styles.description}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,

        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard*/}
        {
          params.locations.map((eikona, index) => (
            <Kartela key={index} {...eikona} navigation={navigation} />
          ))

        }
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  /*icon: {
    width: 20,
    height: 20,
  },
  */
  description: {
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 4,
  },
});
export default Eikones