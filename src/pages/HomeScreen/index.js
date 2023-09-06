import { Container, Title, Container2} from "./style";
import React, { useState } from "react";
import { Image, Text }  from 'react-native';

import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";

export default function HomeScreen ({ navigation }) {

const [peso,setPeso] = useState("");
  return (
    <Container>

      <Title>Home</Title>

      <Container2>
      <MyButton title="Noticias" onPress={() => navigation.navigate("IMCScreen")} />
      <MyButton title="Esportes" onPress={() => navigation.navigate("ICQScreen")} />
      </Container2>

      <MyInput
        myPlaceholder="Digite sua busca" 
        
      />


      

      <Text style={{fontSize:25,  paddingTop: 20}}>
      Olho nos novidades
      </Text>
      
      <Text style={{fontSize:15, paddingTop: 20}}>
    Numa coletiva de imprensa realizada ontem no Palácio Guanabara, o secretário de educação do Rio de Janeiro informou sobre o reajuste salarial de 10% para os professores do estado. Ferreira explicou que a decisão já foi publicada no Diário Oficial e tem caráter emergencial. O reajuste valerá a partir de janeiro do próximo ano.
    </Text>

    </Container>
  );
}
