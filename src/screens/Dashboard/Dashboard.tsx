import React from "react";

import { HighlightCard } from "../../components/HighlightCard/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  PowerIcon,
  HighlightCards,
  Title,
  Transactions,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: Array<DataListProps> = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "12/10/23",
      category: { name: "Vendas", icon: "dollar-sign" },
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgeria Pizzy",
      amount: "R$ 59,00",
      date: "12/10/23",
      category: { name: "Alimentacao", icon: "coffee" },
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 600,00",
      date: "12/10/23",
      category: { name: "Casa", icon: "shopping-bag" },
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/68085186?v=4",
              }}
            />
            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UserName>Victor</UserName>
            </User>
          </UserInfo>
          <PowerIcon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 10,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 5,00"
          lastTransaction="Última saida dia 5 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 5,00"
          lastTransaction="01 a 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
