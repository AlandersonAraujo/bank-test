import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, CardFooter, CardContent, Annotation, Description, CardContentImage, ImageIcon, CardContentImageAnnotation, CardContentImageDescription} from './styles';
import logo from '~/assets/amazon.png';
import logo2 from '~/assets/netflix.png';
import logo3 from '~/assets/ifood.png';

export default function Footer() {
  return (
    <Container>
    <CardFooter>
      <Title>Transações Recentes</Title>
      <Icon name="more-horiz" size={28} color="#000002" />
    </CardFooter>
    <CardContent>
     <CardContentImage>
       <ImageIcon source={logo} />
       <ImageIcon source={logo2} />
       <ImageIcon source={logo3} />
     </CardContentImage>
     <CardContentImageAnnotation>
       <Annotation>Amazon</Annotation>
       <Annotation>Netflix</Annotation>
       <Annotation>Ifood</Annotation>
     </CardContentImageAnnotation>
     <CardContentImageDescription>
     <Description>R$14,00</Description>
     <Description>R$22,00</Description>
     <Description>R$31,00</Description>
     </CardContentImageDescription>
     </CardContent>
  </Container>
  );
}
