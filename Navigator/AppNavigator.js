import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/FontAwesome'

import { Text } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../Screens/HomeScreen';
import SecondaryScreen from '../Screens/SecondaryScreen';
import Logo from '../Logo/Logo';

import ModalScreen from '../Screens/ModalScreen'

const options = 
  { 
    headerLeft: <Logo />,
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
const options2 = 
  { 
    headerLeft: <Logo />,
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Secondary: SecondaryScreen,
  },
  { 
    defaultNavigationOptions: options,
  }
);
  
  const SettingsStack = createStackNavigator({
      Secondary: SecondaryScreen,
      Home: HomeScreen,
    
    },
    { 
      defaultNavigationOptions: options2
    }
  );
  
  const TabNavigator = createMaterialTopTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name='home' size={26} color={ focused ? 'white' : 'black' }  />
        ),
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name='gear' size={ focused ? 26 : 26} color={ focused ? 'white' : 'black' } />
        ),
        },
        
    },
  
  },
  {
    shifting: true,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      tabStyle: {
        backgroundColor: 'red'
      }
    },
    });

  const root = createStackNavigator({
    Main: TabNavigator,
    MyModal: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none',
  })

export default createAppContainer(root);
