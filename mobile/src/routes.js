import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home';
import Details from './pages/Details';

const Navegation = createStackNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <Navegation.Navigator screenOptions={{headerShown: false}} >
                <Navegation.Screen name="Home" component={Home} />
                <Navegation.Screen name="Details" component={Details} />
            </Navegation.Navigator>
        </NavigationContainer>
    )
}