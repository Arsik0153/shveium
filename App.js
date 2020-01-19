import React, { Component } from 'react';
import { View } from 'react-native';

import SignUpNavigator from './navigation/AppNavigator';


export default class App extends Component {

  render() {
    return (
      <View>
        <SignUpNavigator />
      </View>
    );
  }
}
