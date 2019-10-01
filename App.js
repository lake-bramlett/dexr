import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen}
})

const TabNavigator = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  User: User
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
