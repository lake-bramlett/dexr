import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";
import card from './../assets/cards/lake_logo_01.png';

class User extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const th = params ? params.screenTitle : 'My Card';
    console.log('here ghe thign:',th);
    return {
      title: th,
    }
  }

  componentDidMount() {
    console.log('workd');
    this.props.navigation.setParams({ screenTitle: this.props.user.name });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.userContainer}>
        <TouchableHighlight style={styles.cardContainer} onPress={ () => this.props.navigation.navigate('UserDetail') }>
          <Image style={styles.card} source={card} />
        </TouchableHighlight>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.number}</Text>
        <Text>{this.props.user.email}</Text>
        <Button title="Edit Info" onPress={ () => this.props.navigation.navigate('EditInfo') }></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userContainter: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  card: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  }
});

const mapStateToProps = state => {
  console.log('user mapStateToProps', state)
  return { user: state.user.user };
};

export default connect(mapStateToProps)(User);
