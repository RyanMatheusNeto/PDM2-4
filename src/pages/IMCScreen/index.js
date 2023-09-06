import React, { useState } from "react";
import { Container, Title, Result } from "./style";
import { Image, Text }  from 'react-native';

export default function Noticias () {
  


  return (
    <Container>
    <Text style={{fontSize:20}}>CAI METEORO NOS EUA</Text>
     
    <Image style={{width:150, height:150}} source={{uri:'https://img.olhardigital.com.br/wp-content/uploads/2023/02/Meteoro-1024x576.jpg'}}/>
      <Text style={{fontSize:32}}>ACABOU O PAÍS</Text>
      
    </Container>
  );
}
