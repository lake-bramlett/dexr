import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";

class ContactsList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('contactsList props', this.props);
    return (
      <View style={styles.container}>
        <Text>Contacts List</Text>
        <Text>{this.props.contacts[0].name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return { contacts: state.contactsReducer.contacts };
};

export default connect(mapStateToProps)(ContactsList);
