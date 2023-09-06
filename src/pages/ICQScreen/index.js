import React, { useState } from "react";
import { Container, Title } from "./style";
import { Image, Text }  from 'react-native';



export default function Esportes () {

  function calcularIcq() {
    let icq = Number(cintura) / Number(quadril);
    setIcq(icq.toFixed(2));
  }

  return (
    <Container>
      <Title style={{fontSize:20}}>Esportes</Title>
      <Text>
    Neymar fora da copa
    </Text>
    <Image style={{width:150, height:150}} source={{uri:'https://midia.gruposinos.com.br/_midias/jpg/2022/12/09/332732d_highres-20702700.jpg'}}/>
      
      <Text style={{fontSize:25}}>
      Ele sofreu uma lesão na coluna...
      </Text>

      
      
    </Container>
  );
}

