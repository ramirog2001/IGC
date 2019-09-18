import React, { Component } from 'react';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text } from 'react-native';


class Logo extends React.Component {
    render() {
      return (
        <View>
          <Button 
            icon={
              <Icon
                name="arrow-right"
                color="white"
                size={20}
                />
              }
            type="clear"
          />
        </View>    
      );
    };
}

export default Logo;