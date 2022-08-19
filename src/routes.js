import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  FeatherIcon  from 'react-native-vector-icons/Feather';

import Header from './components/Header';

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import { TouchableWithoutFeedback } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShow: true,
                    cardStyle: { backgroundColor: '#1d1d1d' },
                }}
                initialRouteName="Catalog"
            >
                <Stack.Screen
                    name="Catalog"
                    component={Catalog}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerTitle: () => <Header />,
                        headerShown: true,
                        headerTransparent: true,
                        headerBackVisible:true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
