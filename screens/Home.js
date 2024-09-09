import { SafeAreaView } from 'react-native';
import { BlueButtton, WhiteButton } from '../components/Butttons';
import { LogoImage } from '../components/Imagen';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navegacion = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>

            <LogoImage source={require('../src/images/Logo.png')}/>

        </SafeAreaView>
    );
}