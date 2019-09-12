import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Tabs from '~/components/Tabs';
import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="web" size={28} color="#FFF" />
            <Icon name="credit-card" size={28} color="#FFF" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 7.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>....8745</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
      <Footer/>
    </Container>
  );
}
