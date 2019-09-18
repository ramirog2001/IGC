import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView , Platform} from 'react-native';


import { Header } from 'react-native-elements';

import AppNavigator from './Navigator/AppNavigator';

export default class App extends React.Component {
  render(){
  return (

      <View style={styles.container}>
        <AppNavigator />
      </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
},
});
