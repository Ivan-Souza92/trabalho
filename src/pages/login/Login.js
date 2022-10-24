import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Stack, AppBar } from "@react-native-material/core";
import styles from "./styles"
import { Divider, Button } from "@react-native-material/core";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Login = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const enterLogin = async () => {

        await signInWithEmailAndPassword(auth, email, password).then(value => {
            alert('Seja Bem-Vindo!');
            navigation.navigate('Home')
        }).catch(value => {
            alert('Erro ao logar, verifique as credências inseridas!');
        })
    }

    return (

        <View>
            <AppBar title="Login" style={{ backgroundColor: 'black' }} />
            <Stack m={40} spacing={6}>
                <Text variant="h5" style={styles.text} >Login</Text>
                <Divider />
                <Divider />
            </Stack>
            <View style={styles.espacamento}>

                <Stack m={40} spacing={5} >
                    <Text style={styles.text}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.texts}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry='true'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                </Stack>

                <View style={styles.espacamento2}>
                    <Stack fill center spacing={4}>
                        <Button
                            title="Entrar"
                            onPress={() => enterLogin()}
                        />
                        <View style={{ marginTop: 10 }}>
                            <Button
                                variant="outlined"
                                title="Cadastrar"
                                onPress={() => navigation.navigate('Cadastrar')}
                            />
                        </View>
                    </Stack>
                </View>
            </View>
        </View>
    )


}

export default Login

