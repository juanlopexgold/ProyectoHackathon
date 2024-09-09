import React from "react";
import { View, Image, StyleSheet } from "react-native";

export function LogoImage(props) {
    const {source} = props

    return(
        <Image
            style = {{
                // ...styles.Img,
                width: '62%',
                height: 145,
                marginBottom: 80,
            }}
            source={source}
        >
        </Image>
    );
}
export function LogoImage2(props) {
    const {source} = props

    return(
        <Image
            style = {{
                // ...styles.Img,
                width: '75%',
                height: 86,
                marginVertical: 60,
            }}
            source={source}
        >
        </Image>
    );
}

// const styles = StyleSheet.create({
//     Img: {
        
//     }
// })