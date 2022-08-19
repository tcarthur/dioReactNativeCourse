import styled from "styled-components";

export const Container = styled.View`
    bottom: 0;
    position: absolute;
    background: #3B3F41;
    padding: 8px 10px;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between
`;

export const CartPricing = styled.Text`
    padding:20px;
`;

export const CartTotalPrice = styled.Text`
    color: #f3f9ff;
    font-size: 30px;
    font-weight: bold;
`;

export const CartButtom = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
`;

export const CartButtomText = styled.Text`
    flex:1;
    color: #f3f9ff;
    font-weight: bold;
    margin-left: 15px;
    margin-right: auto;
    font-size: 30px;
`
