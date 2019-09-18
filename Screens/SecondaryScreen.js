import React from 'react';
import { Button, View, Text } from 'react-native';

class SecondaryScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Secondary',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Secondary Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        {
      //     <Button
      //     title="Go back"
      //     onPress={() => this.props.navigation.goBack()}
      //     />
    }
     </View>
    );
  }
}

export default SecondaryScreen;