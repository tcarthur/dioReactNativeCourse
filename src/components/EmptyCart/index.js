import React from 'react';
import { Container, ContainerCart, CartEmptyText } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function EmptyCart() {
    return (
        <Container>
            <ContainerCart>
                <FeatherIcon name="slash" size={100} color="#ffffff" />
                <CartEmptyText>Seu carrinho está vazio</CartEmptyText>
            </ContainerCart>
        </Container>
    );
}
