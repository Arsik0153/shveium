import React from "react";
import styled from "styled-components/native";

const Link = (props) => {
    return (
        <WrappedLink onPress={props.onPress}>{props.text}</WrappedLink>
    );
}

const WrappedLink = styled.Text`
    color: #0983FE;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #0983FE;
`

export default Link