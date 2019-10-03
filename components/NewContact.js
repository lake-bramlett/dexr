import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native';

class ContactDetail extends Component {

  static navigationOptions = {
    title: 'New Contact',
  };

  render() {
    return(
     <View style={styles.newContact}>
        <Text>Test</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  newContact: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactDetail;
