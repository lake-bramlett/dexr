import React from 'react';
import { View, Text } from 'react-native';

export default function ContactPreview(props) {
  console.log('preview props', props);
  return(
    <View>
      <Text>{props.contact.name}</Text>
    </View>
  )
}
