import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import Nuevo from "./screens/Nuevo";
import Contrasenia from "./screens/Contrasenia";

const homeNavigator = createNativeStackNavigator();
function MyStack() {
    return (
        <homeNavigator.Navigator
        initialRouteName="Welcome"
        >
            <homeNavigator.Screen name="Welcome" component={Welcome} options={{ headerShown: false}}/>
            <homeNavigator.Screen name="Login" component={Login} options={{ headerShown: false}}/>
            <homeNavigator.Screen name="Register" component={Register} options={{ headerShown: false}}/>
            <homeNavigator.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <homeNavigator.Screen name="Nuevo" component={Nuevo} options={{ headerShown: false}}/>
            <homeNavigator.Screen name="Contrasenia" component={Contrasenia} options={{ headerShown: false}}/>
        </homeNavigator.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}