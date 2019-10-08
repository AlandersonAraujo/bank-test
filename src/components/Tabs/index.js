import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo1 from '~/assets/exemplo1.png';
import logo2 from '~/assets/exemplo2.png';
import logo3 from '~/assets/exemplo3.png';
import logo4 from '~/assets/exemplo4.png';
import logo5 from '~/assets/exemplo5.png';
import logo6 from '~/assets/exemplo6.png';
import logo7 from '~/assets/exemplo7.png';
import logo8 from '~/assets/exemplo8.png';
import logo9 from '~/assets/exemplo9.png';
import {Container, TabsContainer, TabItem, Title, Image, TabItem2} from './styles';

export default function Tabs() {
  return (
    <Container>
      <Title>Transferir</Title>
      <TabsContainer>
      <TabItem2>
          <Icon name="person-add" size={24} color="#252625" />
        </TabItem2>
        <TabItem>
          <Image source={logo1} />
        </TabItem>
        <TabItem>
          <Image source={logo2} />
        </TabItem>
        <TabItem>
          <Image source={logo3} />
        </TabItem>
        <TabItem>
          <Image source={logo4} />
        </TabItem>
        <TabItem>
          <Image source={logo5} />
        </TabItem>
        <TabItem>
          <Image source={logo6} />
        </TabItem>
        <TabItem>
          <Image source={logo7} />
        </TabItem>
        <TabItem>
          <Image source={logo8} />
        </TabItem>
        <TabItem>
          <Image source={logo9} />
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
