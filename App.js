import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Contacts from 'react-native-contacts';
import User from './components/User';
import ContactsList from './components/ContactsList';
import MainScreen from './screens/MainScreen';

import store from './store'


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App;



const TabNavigator = createBottomTabNavigator({
  User: User,
  Contacts: ContactsList,
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
