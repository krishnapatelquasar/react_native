import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';

function Register() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.mainTitle}>System Management </Text>
        <Text style={styles.title}>Register</Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Name"
          placeholderTextColor="#fff"
          autoCapitalize="none"
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Mobile"
          placeholderTextColor="#fff"
          autoCapitalize="none"
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Email"
          placeholderTextColor="#fff"
          autoCapitalize="none"
        />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Password"
          placeholderTextColor="#fff"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    margin: '20px'
  },
  tinyLogo: {
    height: 80,
    width: 80,

  },
  mainTitle: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginBottom: 10,

  },
  input: {
    margin: 15,
    height: 40,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10
  },
  submitButton: {
    backgroundColor: '#0e9ee6',
    padding: 10,
    margin: 15,
    height: 40,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',

  }
});

export default Register;