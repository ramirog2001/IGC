import React from 'react';
import { Button, View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

class SecondaryScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Secondary',
  };
  state = {
    fadeValue: new Animated.Value(0)
  };

  _start = () => {
    this.state.fadeValue.addListener(( {value} )=> console.log(value) );
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 5000
    }).start();
  };
    

  render() {
    return (
      
    
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>Fade </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default SecondaryScreen;