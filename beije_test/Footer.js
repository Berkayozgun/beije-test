import React from 'react';
import {Image, TextInput} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    height: 200,
  },
  footerLogo: {
    width: 50,
    height: 20,
  },
  footerHeaderText: {
    color: '#BDBDBD',
  },
  footerSubText: {
    color: '#BDBDBD',
    width: 350,
    textAlign: 'center',
  },
});

export default function Footer() {
  return (
    <View style={styles.footerView}>
      <Image
        style={styles.footerLogo}
        source={require('./beije_black_logo.png')}
      />

      <Text style={styles.footerHeaderText}>Arayı açmayalım!</Text>
      <Text style={styles.footerSubText}>
        Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
      </Text>

      <TextInput
        style={styles.emailtextInput}
        placeholder="E-posta adresinizi girin"
      />
    </View>
  );
}
