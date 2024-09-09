import React from "react";
import { View,Text,TouchableOpacity, StyleSheet } from "react-native";

export function BlueButtton(props) {
    const {onPress, text} = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#0088a1'
            }}
            onPress = {onPress}
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#ffffff'
                }}
            > {text} </Text>
        </TouchableOpacity>
    );
}

export function WhiteButton(props) {
    const {onPress,text} = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#ffffff',
                borderWidth: 2,
                borderColor: '#000000'
            }}
            onPress = {onPress}
        >
            <Text
                style = {{
                    ...styles.buttonText,
                }}
            > {text} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        marginVertical: 10,
        width: '85%'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
    }
})