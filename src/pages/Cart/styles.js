import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #1d1d1d;
`;

export const ProductContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 120px;
    border-radius: 20px;
    background: #e83f5b;
`;

export const ProductList = styled(FlatList)`
    flex: 1;
    padding: 30px 10px;
`;

export const Product = styled.View`
    flex: 1;
    flex-direction: row;
    margin: 5px;
    background: #ffffff;
    padding: 25px 25px;
    border-radius: 20px;
`;

export const ProductImage = styled.Image`
    height: 100px;
    width: 300px;
`;

export const ProductTitleContainer = styled.View`
    font-size: 16px;
    margin-left: 5px;
    margin-top: 10px;
`;

export const ProductTitle = styled.Text`
    font-size: 25px;
`;

export const TotalContainer = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const ProductPriceContainer = styled.View`
    flex-direction: column;
`;

export const ProductSinglePrice = styled.Text`
    font-size: 15px;
    color: #414756;
    margin-top: 6px;
`;
export const ProductPrice = styled.Text`
    font-weight: bold;
    margin-top: 5px;
    font-size: 16px;
    color: #e83f5b;
`;

export const ProductQuantity = styled.Text`
    font-weight: bold;
    margin-top: 5px;
    margin-right: 10px;
    font-size: 16px;
    color: #e83f5b;
`;
export const ActionContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
`;

export const ActionButtom = styled.TouchableOpacity`
    background: rgba(232, 63, 91, 0.1);
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 5px;
`;

export const TotalProductContainer = styled.View`
    bottom: 0;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 36px 40px;
    border-radius: 10px;
    background: #e83f5b;
`;

export const TotalProductsText = styled.Text`
    flex: 1;
    font-size: 30px;
    color: #fff;
    margin-left: 15px;
    font-weight: bold;
`;

export const SubTotalValue = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;
