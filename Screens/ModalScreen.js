import React, { Component } from 'react';
import { View, Text, Button, Image, WebView } from 'react-native';
class ModalScreen extends React.Component {
    render() {

      const {navigation} = this.props;
      const Nombre = navigation.getParam('Nombre', 'null');
      const Imagen = navigation.getParam('Imagen', 'null');

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
          <Text style={{ fontSize: 30 }}>{Nombre}</Text>
          <Image
                style={{width: '80%', height: '50%'}}
                source={{uri: Imagen.large}} />
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Volver"
          />
        </View>
      );
    }
  }

export default ModalScreen;