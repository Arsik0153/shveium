import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const RegistrationScreen = () => {

  return (
    <FlexedCenter>
      <AppContainer>
        <AppLogo>Switcher</AppLogo>
        <SectionDescription>Регистрация</SectionDescription>
        <RegistrationForm>
          <Input
            placeholder="E-mail"
          />
          <Input
            placeholder="Пароль"
          />
          
        </RegistrationForm>
      </AppContainer>
    </FlexedCenter>
  );
}

const FlexedCenter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${ScreenHeight};
  background: #F3F2F8;
`
const AppContainer = styled.View`
  width: ${ScreenWidth-40}px;
`
const AppLogo = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`
const SectionDescription = styled.Text`
  font-size: 24px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`
const RegistrationForm = styled.View`
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;
`
const Input = styled.TextInput`
  background: #F2F3F5;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`
const Button = styled.Button`
  
`

export default RegistrationScreen