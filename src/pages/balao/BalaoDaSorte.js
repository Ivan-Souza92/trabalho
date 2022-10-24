import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import stylesB from './styles/StylesB';

const BalaoDaSorte = () => {

    const [photo, setPhoto] = useState(require('../../../assets/ballon_red.jpg'))
    const [frase, setFrase] = useState();

    const estourar = () => {

        setPhoto(require('../../../assets/popped_balloon_red.jpg'))

        const frases = ['Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Tomar atitude é o primeiro passo para dar vida ao sonho',
        'Maior barreira para o sucesso é o medo do fracasso',
        'Faça sempre o seu melhor!','Mesmo que pareça difícil, não pare!']
        
        const i = Math.floor(Math.random() * frases.length);
        setFrase(frases[i]);

        //console.log(frases[i])
    }

    const reset = () => {

        setPhoto (require('../../../assets/ballon_red.jpg'))
        setFrase('')
    }

    return (

  <SafeAreaView> 
    <View style ={ stylesB.visao}>
      <br/>
      <Image source={photo} style={stylesB.imagem}/>
      <br/>
      <Text style={stylesB.paragrafo}>{frase}</Text>
      <br/>
        <View>
           <Button 
             title='Estourar Balão'
             color= 'purple'
             onPress={estourar}
           />
           <br/>
            <Button
             title='Resetar'
             color= 'black'
             onPress={reset}
           />
         <br/>  
        </View>
    </View>
  </SafeAreaView>     
  )
}

export default BalaoDaSorte