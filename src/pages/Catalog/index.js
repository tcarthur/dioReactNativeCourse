import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCard from '../../components/FloattingCart';

import { useNavigation } from '@react-navigation/native';

import formatValue from '../../utilis/formatValue';

import {
    Container,
    PriceContainer,
    Product,
    ProductButtom,
    ProductButtomText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
} from './styles';

export default function App() {
    const navigation = useNavigation();

    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'Assinatira Trimestral',
            image_url:"https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
            price: 150.00,
        },
    ]);
    return(
        <Container>
            <ProductContainer>
                <ProductList
                data = {products}
                KeyExtractor={(item) => item.id}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{
                    heigth: 80.
                }}
                renderItem={({item}) => (
                    <Product>
                        <ProductImage source={{ uri: item.image_url }} />
                        <ProductTitle>{item.title}</ProductTitle>
                        <PriceContainer>
                            <ProductPrice>{formatValue(item.price)}</ProductPrice>
                            <ProductButtom onPress={() => navigation.navigate('Cart')}>
                                <ProductButtomText>ADICIONAR</ProductButtomText>
                                <FeatherIcon size={30} name= 'plus-circle' color='#F1B211'/>
                            </ProductButtom>
                        </PriceContainer>
                    </Product>
                )}
                />
            </ProductContainer>
            <FloatingCard />
        </Container>
    );
}
