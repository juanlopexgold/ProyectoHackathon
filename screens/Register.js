import { SafeAreaView } from 'react-native';
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
            <TextInputPer text="Cedula"/>
            <TextInputPer text="Email"/>
            <TextInputPer text="Fecha de nacimiento"/>
            <TextInputPerButt text="Direccion"/>
            <BlueButtton onPress= {() => navegacion.navigate("Home")} text="Inscribirse"/>
            <TextPersonalizadosSolos onPress= {() => navegacion.navigate("Login")} text="¿Ya eres miembro? Iniciar secion"/>

        </SafeAreaView>
    );
}