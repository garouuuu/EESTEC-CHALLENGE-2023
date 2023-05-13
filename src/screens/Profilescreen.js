import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

function Table({ users }) {
  console.log(users);


  return (

    <View style={{ ...styles.container, backgroundColor: '#c88a38' }}>
      <View style={styles.row}>
        <View style={{ ...styles.cell }}></View>
        <View style={{ ...styles.cell }}><Text style={styles.headers} >Rank</Text></View>
        <View style={{ ...styles.cell }}><Text style={styles.headers} >Name</Text></View>
        <View style={{ ...styles.cell }}><Text style={styles.headers} >Score</Text></View>
      </View>

      {users.map((user, index) => {
        console.log(user);
        return (
          <View style={styles.row} key={user.id}>
            <View style={{ ...styles.cell }} key={0}><View style={{ borderRadius: 15 }}><Image source={{ uri: user.image }} style={{
              width: 40, height: 40, borderRadius: 40 / 2, borderColor: 'black', borderWidth: 1
            }} /></View></View>
            <View style={{ ...styles.cell }} key={1}><Text style={styles.text}>{index + 1}</Text></View>
            <View style={{ ...styles.cell }} key={2}><Text style={styles.text}>{user.name}</Text></View>
            <View style={{ ...styles.cell }} key={3}><Text style={styles.text}>{user.score}</Text></View>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 10,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  headers: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: '#eee',
  }
});




const Profilescreen = () => {
  const user = {
    // beautiful image girl
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oZaYZwK986pwWVCtfpZjEQIfs7mC_3nhrQ&usqp=CAU',
  }
  const users = [
    {
      id: "1",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "2",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "3",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "4",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "5",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "6",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "7",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "8",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    },
    {
      id: "9",
      name: "John",
      score: "100",
      image: "https://picsum.photos/200/300"
    }
  ];

  return (
    <ScrollView style={{ backgroundColor: '#960018' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', widht: '100%' }}>

        <View class={"Logo"} ></View>
        <Text style={{ fontSize: 25, color: 'white', marginTop: 20 }}>Every thing is                            </Text>
        <Text style={{ fontSize: 25, color: 'white', marginTop: 5 }}>about <Text style={{ fontSize: 30, color: 'red', marginTop: 5 }}>You</Text>            </Text>
        <View class={"profile-pic"} style={{ marginTop: 10, marginBottom: 10, borderRadius: 50 }}>
          <Image source={{ uri: user.src }}
            style={{
              width: 220, height: 220, borderRadius: 220 / 2, borderColor: 'black', borderWidth: 4
            }} />
        </View>
        <Text style={{ fontSize: 25, color: 'white', marginTop: 5 }}>And the people               </Text>
        <Text style={{ fontSize: 25, color: 'gold', marginTop: 5 }} class={"bold"}>               Around you</Text>


        <Text style={{ fontSize: 30, color: 'gold', marginTop: 50 }} class={"bold"}>Level: 29</Text>
        <View style={{ backgroundColor: 'grey', marginTop: 20, width: 300, borderRadius: 20 }}>
          <View style={{ backgroundColor: 'blue', width: 70, height: 10, borderRadius: 20 }}></View>
        </View>

        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1657/1657088.png" }} style={{ width: 100, height: 100, marginTop: 10 }} />
        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 30 }}>LeaderBoard</Text>

        <Table users={users} />

      </View>
    </ScrollView>

  )
}

export default Profilescreen