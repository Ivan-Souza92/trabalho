import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import { Stack, Divider, TextInput, Button, Text } from "@react-native-material/core";
import cadastroStyle from './CadastroStyle';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';



const Cadastrar = ({ navigation }) => {

    const [largura] = useState(new Animated.Value(0))
    const [altura] = useState(new Animated.Value(30))
    const [opacidade] = useState(new Animated.Value(0))
    const [opacidade2] = useState(new Animated.Value(0))

    Animated.sequence([
        Animated.timing(largura, { toValue: 250, duration: 1000 }),
        Animated.timing(altura, { toValue: 185, duration: 1000 }),
        Animated.timing(opacidade, { toValue: 1, duration: 1000 }),
        Animated.timing(opacidade2, { toValue: 1, duration: 1000 })]).start();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [msg, setMsg] = useState('As senhas são diferentes!');

    const createUser = async () => {

        await createUserWithEmailAndPassword(auth, email, senha).then(value => {
            alert('Usuário Cadastrado com Sucesso');
            navigation.navigate('Login')
        }).catch(value => {
            alert('Erro ao cadastrar, verifique as credências inseridas!');
        })
    }

    return (
        <View>
            <Animated.View style={{opacity: opacidade, textAlign: "center"}}>
                <Stack m={40} spacing={6}>
                    <Text variant="h5" style={cadastroStyle.text} >Cadastro de Usuários</Text>
                    <Divider />
                    <Divider />
                </Stack>
            </Animated.View>
            <View style={cadastroStyle.espacamento}>
                <Stack spacing={40} style={{ margin: 16 }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'arial', marginTop: 50 }}>Informe um E-mail:</Text>
                    <TextInput
                        variant="outlined"
                        placeholder='Email'
                        style={{ margin: 16, height: 10, marginTop: -10 }}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={{ fontWeight: 'bold', fontFamily: 'arial', marginTop: 50 }}>Cadastre uma Senha:</Text>
                    <TextInput
                        variant="outlined"
                        secureTextEntry='true'
                        placeholder='Senha'
                        style={{ margin: 16, height: 10, marginTop: -10 }}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}

                    />
                    <Text style={{ fontWeight: 'bold', fontFamily: 'arial', marginTop: 50 }}>Confirme a Senha:</Text>
                    <TextInput
                        variant="outlined"
                        secureTextEntry='true'
                        placeholder='Senha'
                        style={{ margin: 16, height: 10, marginTop: -10 }}
                        value={confSenha}
                        onChangeText={(text) => setConfSenha(text)}
                    />
                </Stack>
            </View>
            <View style={{ marginTop: 60 }}>
                <Stack fill center spacing={4}>
                    <View style={{ marginTop: 10 }}>
                        <Button
                            variant="outlined"
                            title="Cadastrar"
                            onPress={() => {
                                if (senha === confSenha && email != '' && senha != '') {
                                    createUser();
                                } else {
                                    alert(msg)
                                }
                            }}
                        />
                    </View>
                </Stack>
            </View>
        </View >
    )

}

export default Cadastrar