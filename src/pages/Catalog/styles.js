import styled from 'styled-components/native';
import { FlatList, SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: #1D1D1D;
`;

export const ProductContainer = styled.View`
    flex:1;
    flex-direction: row;
    margin-top: 200px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 350px;
    border-radius: 5px;
`;

export const ProductList = styled(FlatList).attrs({
    numColums: 1,
})`
    flex: 1;
    padding: 60px 20px;
    background: #292929;
    border-radius: 25px;
`;

export const Product = styled.View`
    flex:1;
    margin: 40px;
    padding: 32px 12px;
    border-radius: 25px;
`;

export const ProductImage = styled.Image`
    width: 90%;
    height: 180px;
    align-self: center;
`;

export const ProductTitle = styled.Text`
    color: #ffffff;
    font-size: 22px;
    margin-top: 10px;
    line-height: 40px;
    letter-spacing: 3.5px;
    text-align: center;
`;

export const PriceContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding: 25px 32px 4px;
`;

export const ProductPrice = styled.Text`
    color: #ffffff;
    font-size: 38px;
    font-weight: 800;
`;

export const ProductButtom = styled.TouchableOpacity`
    background: #131313;
    padding: 10px 38px;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
`;

export const ProductButtomText = styled.Text`
    color: #F1B211;
    font-weight: 800;
    padding: 0 4px;
    font-size: 24px;
    text-transform: uppercase;
    margin-right: 25px;
`;
