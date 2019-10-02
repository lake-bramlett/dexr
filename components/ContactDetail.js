import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native';

class ContactDetail extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Name'),
    };
  };

  render() {
    const { navigation } = this.props;
    return(
     <View style={styles.conactDetail}>
        <Text>Number: {navigation.getParam('number')}</Text>
        <Text>Email: {navigation.getParam('email')}</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  contactDetail: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactDetail;
