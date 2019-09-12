import React from 'react';

import logo from '~/assets/avatargit.jpg';
import {Container, Top, Title, Logo, Description} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Title>Olá, Alanderson</Title>
        <Logo source={logo} />
      </Top>
      <Description>Seja bem vindo novamente!</Description>
    </Container>
  );
}
