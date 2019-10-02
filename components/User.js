import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function User() {
  return (
    <View style={styles.user}>
      <Text>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;
