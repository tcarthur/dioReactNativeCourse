import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';


import {
    Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContainer,
    ProductTitle,
    ProductPriceContainer,
    ProductSinglePrice,
    ProductPrice,
    ProductQuantity,
    ActionContainer,
    ActionButtom,
    TotalProductContainer,
    TotalProductsText,
    SubTotalValue,
    TotalContainer,
} from './styles';

import formatValue from './../../utilis/formatValue';
import EmptyCart from '../../components/EmptyCart';

export default function Cart() {
    const [products, setProducts] = useState([

    ]);

    const cartSize = useMemo(() => {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(() => {
        const cartAmount = products.reduce((acc,product) => {
            const totalPrice = acc + product.price * product.quantity;
            return totalPrice
        },0)

        return formatValue(cartAmount);
    },[products])

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    KeyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyCart />}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        heigth: 80,
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductSinglePrice>
                                        {formatValue(item.price)}
                                    </ProductSinglePrice>

                                    <TotalContainer>
                                        <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                                        <ProductPrice>
                                            {formatValue(item.price * item.quantity)}
                                        </ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButtom onPress={()=>{}}>
                                    <FeatherIcon name="plus" color="#E83F5B" size={16}/>
                                </ActionButtom>
                                <ActionButtom onPress={()=>{}}>
                                    <FeatherIcon name="minus" color="#E83F5B" size={16}/>
                                </ActionButtom>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProductContainer>
                <FeatherIcon name='shopping-cart' color='#ffffff' size={40}/>
                <TotalProductsText>{cartSize} {cartSize === 1 ? 'Item' : 'Itens'}</TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductContainer>
        </Container>
    );
}
