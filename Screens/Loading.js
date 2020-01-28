import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

const RegistrationScreen = (props) => {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            props.navigation.navigate(user ? "Home" : "SignUp")
        })
    });

    return (
        <Container>
            <Text>Loading</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </Container>
    );
}

const Container = styled.View`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export default RegistrationScreen