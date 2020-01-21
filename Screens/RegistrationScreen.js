import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ButtonAction from './../src/components/ButtonAction';
import Link from '../src/components/Link';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const RegistrationScreen = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isRegister, setIsRegister ] = useState(true);

  const onRegisterClick = () => {
    props.navigation.navigate("Home");
  }

  /*useEffect(() => {
    console.log(registerFormEmail);
  }, [registerFormEmail]);*/

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <FlexedCenter>
      <AppContainer>
        <AppLogo>Switcher</AppLogo>
        {isRegister ? (
          <>
          <SectionDescription>Регистрация</SectionDescription>
          <RegistrationForm>
            <Input
              placeholder="E-mail"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <Input
              placeholder="Пароль"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <ButtonAction 
              text="Зарегистрироваться"
              onPress={() => onRegisterClick()}
            />
            <AlreadyLogged>
              Уже зарегистрированы? {"\n"}
              <Link text="Войти" onPress={() => {setIsRegister(!isRegister)}}/>
            </AlreadyLogged>
          </RegistrationForm>
          </>
        ) : (
          <>
          <SectionDescription>Авторизация</SectionDescription>
          <RegistrationForm>
            <Input
              placeholder="E-mail"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              value={email}
            />
            <Input
              placeholder="Пароль"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <ButtonAction 
              text="Авторизоваться"
              onPress={() => onRegisterClick()}
            />
            <AlreadyLogged>
              Еще не зарегистрированы? {"\n"}
              <Link text="Зарегистрироваться" onPress={() => {setIsRegister(!isRegister)}}/>
            </AlreadyLogged>
          </RegistrationForm>
          </>
        )}
        
      </AppContainer>
    </FlexedCenter>
    </TouchableWithoutFeedback>
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
  margin-top: -100px;
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
const AlreadyLogged = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  line-height:18px;
`

export default RegistrationScreen