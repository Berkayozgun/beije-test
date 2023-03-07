import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Divider: {
    width: 350,
    height: 1,
    backgroundColor: '#BDBDBD',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function Divider() {
  return <View style={styles.Divider} />;
}
