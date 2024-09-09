import React from "react";
import { TouchableOpacity,Text } from "react-native";

export function TextPersonalizadosSolos(props) {
    const { onPress,text } = props

    return (
        <TouchableOpacity
            onPress = {onPress}
        >
            <Text
                style = {{
                    color: '#000'
                }}
            > {text} </Text>
        </TouchableOpacity>
    );
}