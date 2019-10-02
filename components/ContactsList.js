import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import { connect } from "react-redux";
import ContactDetail from './ContactDetail';
import { v4 } from "uuid";
import { createStackNavigator } from 'react-navigation-stack';

class ContactsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('contactsList props', this.props);
    return (
      <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={this.props.contacts}
            renderItem={({ item }) => <Text key={v4()} onPress={ ()=> Linking.openURL('https://google.com') } style={styles.contactPreview}>{item.name}</Text>}
          />
          <View style={styles.addContact}>
            <Button title="Add Contact"></Button>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingTop: 20,
  },
  flatList: {
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  addContact: {
    alignSelf: 'stretch',
    backgroundColor: '#333',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  contactPreview: {
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    color: 'black',
    flex: 1
  }
});

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return { contacts: state.contactsReducer.contacts };
};

const contactsNavigator = StackNavigator({
 Contact: {
    screen: props=> <ContactDetail {...props}>
 }})
export default connect(mapStateToProps)(ContactsList);
