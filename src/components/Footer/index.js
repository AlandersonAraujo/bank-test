import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, CardFooter, CardContent, Annotation, Description} from './styles';

export default function Footer() {
  return (
    <Container>
     <Icon name="remove" size={28} color="#8B10AE" />
    <CardFooter>
      <Title>Transações Recentes</Title>
      <Icon name="keyboard-arrow-right" size={28} color="#8B10AE" />
    </CardFooter>
    <CardContent>
      <Annotation>Amazon</Annotation>
      <Description>R$14,00</Description>
    </CardContent>
    <CardContent>
      <Annotation>Amazon</Annotation>
      <Description>R$22,00</Description>
    </CardContent>
    <CardContent>
      <Annotation>Amazon</Annotation>
      <Description>R$31,00</Description>
    </CardContent>
  </Container>
  );
}
