import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';


import {
    Container,
    CartPricing,
    CartTotalPrice,
    CartButtom,
    CartButtomText,
} from './styles';

export default function FloatingCard() {
    const navigation = useNavigation();

    return(
        <Container>
            <CartButtom onPress={() => navigation.navigate('Cart')}>
                <FeatherIcon name="shopping-cart" size={30} color="#F1B211" />
                <CartButtomText>2 itens</CartButtomText>

                <CartPricing>
                    <CartTotalPrice>R$ 200,00</CartTotalPrice>
                </CartPricing>
                <FeatherIcon name="chevron-right" size={40} color="#F1B211" />

            </CartButtom>
        </Container>
    );
}
