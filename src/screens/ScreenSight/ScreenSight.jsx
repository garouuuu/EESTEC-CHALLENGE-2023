import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import MapView from "react-native-maps";

/**
 Syntax for using this component
    
*/

const ScreenSight = ({ route }) => {
  const { discription, shightTitle, images } = route.params;

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.src }} style={styles.image} />
  );

  const user = {
    // beautiful image girl
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oZaYZwK986pwWVCtfpZjEQIfs7mC_3nhrQ&usqp=CAU",
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.wrapper, marginTop: 60 }}>
        <View>
          <View style={{ width: 100, height: 20 }} />
        </View>
        <View style={styles.user}>
          <Image
            source={{
              uri: user.src,
            }}
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          />
        </View>
      </View>

      <View>
        <Text style={styles.sightTitle}>{shightTitle}</Text>
      </View>

      <View>
        <Text style={styles.discription}>{discription}</Text>
      </View>

      <View style={styles.imagesslider}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={20}
        />
      </View>

      <MapView
        style={{ width: "100%", height: "30%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    top: 40,
    padding: 20,
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagesslider: {
    width: "100%",
    height: 280,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  image: {
    width: 250,
    height: 250,
    margin: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sightTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  discription: {
    padding: 20,
    fontSize: 15,
    fontWeight: "normal",
  },
});

export default ScreenSight;
