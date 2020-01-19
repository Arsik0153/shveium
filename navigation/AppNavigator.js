import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import RegistrationScreen from '../Screens/RegistrationScreen'
import HomeScreen from '../Screens/HomeScreen'

const SignUpNavigator = createSwitchNavigator({
    SignUp: RegistrationScreen,
    Home: HomeScreen
})

export default createAppContainer(SignUpNavigator)