import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Paragraph, Title, Avatar } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const DATA = [
  {
    id: '1',
    title: 'Escolha o melhor pacote e viaje com a gente!',
    subtitle: 'Arquitetura',
    photo: 'https://picsum.photos/600',
    text: 'Desconto de 25% na escolha de pacotes para 2023'
  }
];

const Item = ({ title, color, photo, text }) => (
    <View>      
      <Card.Content>
          <Title style={{fontWeight: 600}}>{title}</Title>
          <Paragraph>{color}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: photo }} /> 
      <Text style={{textAlign: 'center'}}>{text}</Text>        
    </View>
  );

const Home = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} subtitle={item.color} photo={item.photo} text={item.text} />
  );

  const modalizeRef = useRef(null);

  const openModalize = () => {
      modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  return (
    <View style={{flex: 1}}>
      <Card>
          <Card.Title title="Viagens" subtitle="2022" left={LeftContent} />
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.num}
          />     
      </Card>  
      <TouchableOpacity
        style={styles.button}
        onPress={openModalize}>
          <Text>Sobre a SkyBRTour</Text>
        </TouchableOpacity>
        <Modalize
        ref={modalizeRef}
          snapPoint={480}
          modalHeight={600}>
        <View style={styles.viewModalize}>
          <Text style={styles.title}> Sobre a SkyBRTour</Text>
          <Text style={styles.text}>
          A SkyBRTour é uma empresa que oferece um serviço on-line <br/>
          para compras de pacotes de viagens
          </Text>
          <TouchableOpacity
                style={styles.buttonModalize}
                onPress={closeModalize}>
                <Text>Fechar</Text>
          </TouchableOpacity>      
        </View>
      </Modalize>      
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 20
  },
  viewModalize: {
    flex: 1,
    margin: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 10,
  },
  text: {
    textAlign: 'left',
    fontSize: 18,
  },
  buttonModalize: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 8,
    margin: 15
  }
});