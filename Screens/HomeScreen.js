import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ButtonAction from './../src/components/ButtonAction';

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

  const handleSubmit = () => {
    alert(`sex: ${sex}, size: ${size}, height: ${height}, chestGirth: ${chestGirth}, waistGirth: ${waistGirth}, hipsGirth: ${hipsGirth}, neckGirth: ${neckGirth}`)
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <FlexedCenter>
      <AppContainer behavior="position" enabled>
        <PageTitle>
          Генерация
        </PageTitle>
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
  padding-top: 50px;
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
  padding: 15px 10px;
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
  padding: 15px;
  width: 60%;
`
const InputTextLabel = styled.Text`
  color: #B0B3B8;
  font-size: 16px;
  margin-right: 30px;
`

export default HomeScreen