import React from "react";
import { HighlightCard } from "../../components/HighlightCard/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard/TransactionCard";

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
} from "./styles";

export function Dashboard() {
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
        <TransactionCard />
      </Transactions>
    </Container>
  );
}
