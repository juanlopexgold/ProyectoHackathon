import { SafeAreaView, ScrollView, View } from 'react-native';
import { BlueButtton } from '../components/Butttons';
import { LogoImage2 } from '../components/Imagen';
import { useNavigation } from '@react-navigation/native';
import { TextInputPer, TextInputPerButt } from '../components/Imputs';
import { TextPersonalizadosSolos } from '../components/Toush';

export default function App() {
    const navegacion = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 'center' }}>
            <SafeAreaView>
                <LogoImage2 source={require('../src/images/Group.png')} />
                <TextInputPer text="Cedula" />
                <TextInputPer text="Email" />
                <TextInputPer text="Fecha de nacimiento" />
                <TextInputPer text="Direccion" />
                <TextInputPer text="Usuario" />
                <TextInputPerButt text="Contraseña" />
                <BlueButtton onPress={() => navegacion.navigate("Home")} text="Inscribirse" />
                <TextPersonalizadosSolos onPress={() => navegacion.navigate("Login")} text="¿Ya eres miembro? Iniciar secion" />
            </SafeAreaView>
        </View>
    );
}