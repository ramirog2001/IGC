import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';

const UserItem = ({Nombre, Imagen, navigation}) => {
    return (
        <TouchableOpacity
            onPress = {() => navigation.navigate('MyModal', {Nombre: Nombre, Imagen: Imagen})}>
            <Text>{Nombre}</Text>
            <Image 
                style={{height: 60, width: 60}}
                source={{uri:Imagen}}
            />
        </TouchableOpacity>
    );
};

export default UserItem;