import React from "react";
import { TextInput } from "react-native";

export function TextInputPer(props) {
    const {text} = props

    return(
        <TextInput
            style = {{
                // ...styles.Img,
                width: '90%',
                height: 45,
                paddingHorizontal: 4,
                borderBottomWidth: 1,
                borderBottomColor: '#000000',
                marginBottom: 20
            }}
            placeholder={text}
        />
    );
}

export function TextInputPerButt(props) {
    const {text} = props

    return(
        <TextInput
            style = {{
                // ...styles.Img,
                width: '90%',
                height: 45,
                paddingHorizontal: 4,
                borderBottomWidth: 1,
                borderBottomColor: '#000000',
                marginBottom: 60
            }}
            placeholder={text}
        />
    );
}