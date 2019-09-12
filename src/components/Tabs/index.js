import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText, Title} from './styles';

export default function Tabs() {
  return (
    <Container>
      <Title>Meus Atalhos</Title>
      <TabsContainer>
      <TabItem>
          <Icon name="person-add" size={24} color="#8B10AE" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#8B10AE" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#8B10AE" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#8B10AE" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#8B10AE" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
