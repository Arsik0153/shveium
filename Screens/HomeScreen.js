import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Dimensions, TouchableWithoutFeedback, Keyboard, Alert, StatusBar } from 'react-native';
import ButtonAction from './../src/components/ButtonAction';
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const HomeScreen = () => {

  const [ sex, setSex ] = useState(""); // "M" - Male, "F" - Female
  const [ size, setSize ] = useState(""); // "B" - Big, "S" - Small
  const [ height, setHeight ] = useState("");
  const [ chestGirth, setChestGirth ] = useState(""); // Обхват груди
  const [ waistGirth, setWaistGirth ] = useState(""); // Обхват талии
  const [ hipsGirth, setHipsGirth ] = useState(""); // Обхват бёдер
  const [ neckGirth, setNeckGirth ] = useState(""); // Обхват шеи
  const [ email, setEmail ] = useState("");

  const handleSubmit = () => {
    alert(`sex: ${sex}, size: ${size}, height: ${height}, chestGirth: ${chestGirth}, waistGirth: ${waistGirth}, hipsGirth: ${hipsGirth}, neckGirth: ${neckGirth}`)
  }

  const showDialog = () => {
    Alert.alert(
      'Аккаунт',
      email,
      [
        {text: 'Выйти с аккаунта', onPress: () => logOut()},
        {
          text: 'Отмена',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  const logOut = () => {
    firebase.auth().signOut();
  }

  useEffect(() => {
    const { email } = firebase.auth().currentUser;
    setEmail(email);
  });

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <FlexedCenter>
      <AppContainer behavior="position" enabled>
        <StatusBar barStyle="dark-content" />
        <PageTitle>
          Генерация
        </PageTitle>
        <Avatar>
          <Feather.Button onPress={() => showDialog()} name="user" backgroundColor="#0983FE" size={24} borderRadius={50} iconStyle={{margin: 0, padding: 0, marginRight: 0}}></Feather.Button>
        </Avatar>
          <InputGroupTitle>Ваш пол:</InputGroupTitle>
          <InputGroup>
            <InputRadio first onPress={() => setSex("M")}>
              <RadioText current={sex} target="M">Мужской</RadioText>
              <RadioState current={sex} target="M"></RadioState>
            </InputRadio>
            <InputRadio onPress={() => setSex("F")}>
              <RadioText current={sex} target="F">Женский</RadioText>
              <RadioState current={sex} target="F"></RadioState>
            </InputRadio>
          </InputGroup>
          <InputGroupTitle>Размер:</InputGroupTitle>
          <InputGroup>
            <InputRadio first onPress={() => setSize("B")}>
              <RadioText current={size} target="B">Взрослый</RadioText>
              <RadioState current={size} target="B"></RadioState>
            </InputRadio>
            <InputRadio onPress={() => setSize("S")}>
              <RadioText current={size} target="S">Детский</RadioText>
              <RadioState current={size} target="S"></RadioState>
            </InputRadio>
          </InputGroup>

          <DoubleInputGroup>
            <DoubleInputTitle>Рост:</DoubleInputTitle>
            <DoubleInputTitle>Обхват груди:</DoubleInputTitle>
          </DoubleInputGroup>
          <InputGroup>
            <InputRadio first>
              <Input
                placeholder="Рост"
                keyboardType="numeric"
                onChangeText={text => setHeight(text)}
                value={height}
              />
              <InputTextLabel>см</InputTextLabel>
            </InputRadio>
            <InputRadio>
              <Input
                placeholder="Обхват груди"
                keyboardType="numeric"
                onChangeText={text => setChestGirth(text)}
                value={chestGirth}
              />
              <InputTextLabel>см</InputTextLabel>
            </InputRadio>
          </InputGroup>

          <DoubleInputGroup>
            <DoubleInputTitle>Обхват талии:</DoubleInputTitle>
            <DoubleInputTitle>Обхват бёдер:</DoubleInputTitle>
          </DoubleInputGroup>
          <InputGroup>
            <InputRadio first>
              <Input
                placeholder="Обхват талии"
                keyboardType="numeric"
                onChangeText={text => setWaistGirth(text)}
                value={waistGirth}
              />
              <InputTextLabel>см</InputTextLabel>
            </InputRadio>
            <InputRadio>
              <Input
                placeholder="Обхват бёдер"
                keyboardType="numeric"
                onChangeText={text => setHipsGirth(text)}
                value={hipsGirth}
              />
              <InputTextLabel>см</InputTextLabel>
            </InputRadio>
          </InputGroup>

          <DoubleInputGroup>
            <DoubleInputTitle>Обхват шеи:</DoubleInputTitle>
          </DoubleInputGroup>
          <InputGroup>
            <InputRadio first>
              <Input
                placeholder="Обхват шеи"
                keyboardType="numeric"
                onChangeText={text => setNeckGirth(text)}
                value={neckGirth}
              />
              <InputTextLabel>см</InputTextLabel>
            </InputRadio>
          </InputGroup>
          <ButtonAction 
            text="Сгенерировать"
            customStyles={`width: ${ScreenWidth - 40}px; margin-top: 30px;`}
            onPress={() => handleSubmit()}
          />
      </AppContainer>
    </FlexedCenter>
    </TouchableWithoutFeedback>
  );
}

const FlexedCenter = styled.View`
  min-height: ${ScreenHeight};
  background: #F3F2F8;
`
const AppContainer = styled.KeyboardAvoidingView`
  width: ${ScreenWidth-40}px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  height: 100%;
`
const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 15px;
`
const InputGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${ScreenWidth - 40};
  margin-top: 10px;
`
const InputGroupTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  width: 100%;
  margin-top: 10px;
`
const InputRadio = styled.TouchableOpacity`
  background: #fff;
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(ScreenWidth/2) - 30}px;
  border-radius: 10px;
  ${props => props.first ? 'margin-right: 20px;' : ''}
`
const RadioState = styled.View`
  width: 7px;
  height: 7px;
  border: 2px solid ${props => props.current == props.target ? "#0983FE" : "#B0B3B8;"};
  padding: 3px;
  border-radius: 7px;
  margin-right: 5px;
`
const RadioText = styled.Text`
  ${props => props.current == props.target ? "color: #0983FE" : "color: #B0B3B8;"}
`
const DoubleInputGroup = styled.View`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DoubleInputTitle = styled.Text`
  width: ${ScreenWidth/2-10}px;
  font-weight: bold;
  font-size: 22px;
  margin-top: 20px;
`
const Input = styled.TextInput`
  background: #F2F3F5;
  border-radius: 5px;
  padding: 10px 15px;
  width: 60%;
`
const InputTextLabel = styled.Text`
  color: #B0B3B8;
  font-size: 16px;
  margin-right: 30px;
`
const Avatar = styled.View`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -40px;
`

export default HomeScreen