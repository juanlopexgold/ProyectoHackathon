import { SafeAreaView, View } from 'react-native';
import { BlueButtton } from '../components/Butttons';
import { LogoImage2 } from '../components/Imagen';
import { useNavigation } from '@react-navigation/native';
import { TextInputPer, TextInputPerButt } from '../components/Imputs';
import { TextPersonalizados } from '../components/Textos';

export default function App() {
    const navegacion = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>

            <LogoImage2 source={require('../src/images/Group.png')}/>
            <TextInputPer text="Nueva contraseña"/>
            <TextInputPerButt text="Confirmar contraseña"/>
            <BlueButtton onPress= {() => navegacion.navigate("Home")} text="Sing in"/>
            
        </SafeAreaView>
    );
}