import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableHighlight, TextInput } from 'react-native';
import { connect } from "react-redux";
import editUser from './../actions/user_actions.js';

class EditUserInfo extends Component {
  constructor(props) {
    super(props);
    console.log('edit user props', props);
    this.state = {
      name: "",
      number: 0,
      email: "",
      company: "",
    };
  }

  static navigationOptions = {
    title: 'Edit Info',
  };


  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Name</Text>
        <TextInput style={styles.textInput} placeholder={navigation.getParam('name')} onChangeText={(name) => this.setState({name})}></TextInput>
        <Text>Number</Text>
        <TextInput style={styles.textInput} placeholder={navigation.getParam('number')} onChangeText={(number) => this.setState({number})}></TextInput>
        <Text>Email</Text>
        <TextInput style={styles.textInput} placeholder={navigation.getParam('email')} onChangeText={(email) => this.setState({email})}></TextInput>
        <Text>Company</Text>
        <TextInput style={styles.textInput} placeholder={navigation.getParam('company')} onChangeText={(company) => this.setState({company})}></TextInput>
        <Button title="Submit"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
});


export default connect(null, editUser)(EditUserInfo);
