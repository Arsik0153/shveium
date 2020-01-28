import React, { Component } from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import RegistrationScreen from './Screens/RegistrationScreen'
import HomeScreen from './Screens/HomeScreen'
import LoadingScreen from './Screens/Loading'
import * as firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

const SignUpNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  SignUp: RegistrationScreen,
  Home: HomeScreen,
})

export default createAppContainer(
  SignUpNavigator,
  {
    initialRouteName: 'Loading'
  }   
)