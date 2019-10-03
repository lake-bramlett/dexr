import React, { Component } from 'react';
import {Modal, Image, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native';
import qr from './../assets/cards/lake_card_qr.png';

class ContactDetail extends Component {

  static navigationOptions = {
    title: 'User',
  };

  render() {
    const { navigation } = this.props;
    return(
     <View style={styles.conactDetail}>
      <TouchableHighlight style={styles.qrContainer} onPress={ () => this.props.navigation.navigate('User') }>
         <Image
           style={styles.qrCode}
           source={qr} />
      </TouchableHighlight>
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
  qrContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  qrCode: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
  }
});

export default ContactDetail;
