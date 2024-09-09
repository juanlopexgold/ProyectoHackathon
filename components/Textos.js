import React from "react";
import { Text } from "react-native";

export function TextPersonalizados(props) {
    const { text } = props

    return (
        <Text
            style={{
                color: '#000',
                marginBottom:10
            }}
        > {text} </Text>
    );
}