import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';
import image from '../../assets/feature-image-road-trip-indian-license.jpg';
import { Animated } from 'react-native';

const Stack = createStackNavigator();

const Welcome = ({ navigation }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [progress, setProgress] = useState(0);
  const [isPersonalInfoEntered, setIsPersonalInfoEntered] = useState(false);

  const handleLoginPress = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setProgress(0.25);
  };

  const handleSignUpPress = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setProgress(0.25);
  };

  const handleNameChange = (text) => {
    setName(text);
    setProgress(25);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsPersonalInfoEntered(true);
    setProgress(50);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setProgress(1);
  };

  const handleSignUp = () => {
    // authenticate user and navigate to Root screen if successful
    if (name && email && password || true) {
      // add authentication logic here
      if (navigation) {
        navigation.navigate('Root');
      }
    } else {
      alert('Please fill all fields');
    }

    setProgress(100);
    navigation.navigate('Root');
  };


  const spinnerValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Start the spinner animation when the component mounts
    Animated.loop(
      Animated.timing(spinnerValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinnerValue]);

  const spinnerRotation = spinnerValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });


  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.progressBar}>
        <View style={{ height: `${progress}%`, backgroundColor: 'green' }}></View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome to Trip.is</Text>
        </View>
        <View style={styles.content}>
          {!showLogin && !showSignUp && (
            <>
              <View style={styles.spinnerContainer}>
                <Text style={styles.spinnerText}>Get ready..</Text>
                <Animated.Image
                  source={require('../../assets/earth.png')}
                  style={[styles.spinner, { transform: [{ rotate: spinnerRotation }] }]}
                />
              </View>
              <Text style={styles.text}>Explore, Interact, Play!</Text>
              <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
          {showLogin && (
            <>
              <Text style={styles.text}>Login</Text>
              <TextInput
                style={styles.input}
                placeholder="Name or Email"
                onChangeText={handleNameChange}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity style={styles.button} onPress={() => setShowLogin(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
          {showSignUp && (
            <>
              <Text style={styles.text}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={handleNameChange}
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleEmailChange}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}> Enter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setShowSignUp(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 10,
    backgroundColor: '#ccc',
    transition: '3s', // adjust the duration and timing function to your preference
  },
  header: {
    height: 80,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#4e92bf',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    minWidth: 200,
    backgroundColor: 'white',
  },
  spinnerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  spinnerText: {
    fontSize: 18,
    color: 'white',
  },
  spinner: {
    marginTop: 10,
    width: 80,
    height: 80,
  },
});

export default Welcome;  