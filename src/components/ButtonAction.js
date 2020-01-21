import React from 'react';
import styled from 'styled-components/native';

const ButtonAction = (props) => {
    return(
        <ButtonContainer 
            background={props.background}
            onPress={props.onPress}
            customStyles={props.customStyles}
        >
            <ButtonText>{props.text && props.text}</ButtonText>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.TouchableOpacity`
    background: ${props => props.background || "#0983FE"};
    border-radius: 5px;
    padding: 14px;
    ${props => props.customStyles}
`
const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: #fff;
`

export default ButtonAction;