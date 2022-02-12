import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionType {
  type: "positive" | "negative";
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const Amount = styled.Text<TransactionType>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date };
