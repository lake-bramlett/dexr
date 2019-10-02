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
import ContactDetail from './components/ContactDetail';
import MainScreen from './screens/MainScreen';
import store from './store'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App;

//stack and tab navigation

const ContactStack = createStackNavigator({
  Contacts: ContactsList,
  Contact: ContactDetail
})

const UserStack = createStackNavigator({
  User: User,
})

const TabNavigator = createBottomTabNavigator({
  Contacts: ContactStack,
  User: UserStack,
})

const AppContainer = createAppContainer(TabNavigator);

//styles

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
