import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/login/Login';
import Cadastrar from '../pages/cadastro/Cadastrar';
import Home from '../pages/home/Home';
import BalaoDaSorte from '../pages/Balao/BalaoDaSorte';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home"  options={{ headerShown: false }}  component={Home} />
            <Tab.Screen name="Balão"  options={{ headerShown: false }}  component={BalaoDaSorte} />
        </Tab.Navigator>

    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Cadastrar" component={Cadastrar} />
                <Stack.Screen name="Home" initialRouteName="Tabs" options={{ headerShown: false }}  component={Tabs} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Routes