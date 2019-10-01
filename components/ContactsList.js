import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ContactsList(props) {
    return (
      <View style={styles.container}>
          <Text>{this.props.contacts[0].name}</Text>
          <Text>{this.props.contacts[0].number}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactsList;
