import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { Button } from 'react-native';

import User from '../Components/User';

class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Home',
  };



  render() {
    

    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray' }}>

      
        <User  navigation = {this.props.navigation}/>
       
      </View>
    );
  }
}

export default HomeScreen;