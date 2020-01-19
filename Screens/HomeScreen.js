import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = () => {

  return (
    <AppContainer>
      <AppLogo>Switcher</AppLogo>
    </AppContainer>
  );
}

const AppContainer = styled.Text`
  flex: 1;
  background: #F3F2F8;
`

const AppLogo = styled.View`

`

export default HomeScreen