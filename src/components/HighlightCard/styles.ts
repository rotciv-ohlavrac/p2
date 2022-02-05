import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.View<{ type: "up" | "down" | "total" }>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text<{ type: "up" | "down" | "total" }>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

const Icon = styled(Feather)<{ name: string }>`
  font-size: ${RFValue(40)}px;
  ${({ name }) =>
    name === "arrow-up-circle" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ name }) =>
    name === "arrow-down-circle" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  
  ${({ name }) =>
    name === "dollar-sign" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

const Footer = styled.View``;

const Amount = styled.Text<{ type: "up" | "down" | "total" }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;

const LastTransaction = styled.Text<{ type: "up" | "down" | "total" }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;

export { Container, Header, Title, Icon, Footer, Amount, LastTransaction };
