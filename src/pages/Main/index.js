import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Tabs from '~/components/Tabs';
import logo from '~/assets/logo-visa.png';
import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, ImageIcon, Annotation2, Annotation, Title2, CardHeaderContent} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
          <ImageIcon source={logo} />
            <CardHeaderContent>
            <Icon
             name="wifi"
             size={25}
             color="#FFF"
            />
            </CardHeaderContent>
          </CardHeader>
          <CardContent>
            <Title2>****</Title2>
            <Title2>****</Title2>
            <Title2>****</Title2>
            <Title>3308</Title>
          </CardContent>
          <CardFooter>
              <Annotation>ALANDERSON ARAUJO</Annotation>
              <Annotation2>06/08</Annotation2>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
      <Footer/>
    </Container>
  );
}
