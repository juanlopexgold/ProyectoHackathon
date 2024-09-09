import { SafeAreaView, View } from 'react-native';
import { BlueButtton } from '../components/Butttons';
import { LogoImage2 } from '../components/Imagen';
import { useNavigation } from '@react-navigation/native';
import { TextInputPer, TextInputPerButt } from '../components/Imputs';
import { TextPersonalizadosSolos } from '../components/Toush';

export default function App() {
    const navegacion = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>

            <LogoImage2 source={require('../src/images/Group.png')}/>
            <TextInputPer text="Usuario"/>
            <TextInputPerButt text="Usuario"/>
            <BlueButtton onPress= {() => navegacion.navigate("Home")} text="Sing in"/>
            <View style={{ flex: 1, flexDirection:'row',gap:40,marginTop:15}}>
                <TextPersonalizadosSolos onPress= {() => navegacion.navigate("Contrasenia")} text="Olvido su contraseña?"/>
                
                <TextPersonalizadosSolos onPress= {() => navegacion.navigate("Register")} text="Inscribirse"/>
            </View>
            
        </SafeAreaView>
    );
}