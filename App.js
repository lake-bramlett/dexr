import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Contacts from 'react-native-contacts';
import User from './components/User';
import ContactsList from './components/ContactsList';


class App extends Component {

  render() {
    return (
      <AppContainer />
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
