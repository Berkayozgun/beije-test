import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 600,
  },
  bodyHeader: {
    fontSize: 32,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'left',
    marginTop: 100,
  },
  bodyText: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'left',
    width: 350,
    lineHeight: 30,
    marginTop: 20,
  },
});

export default function componentName() {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodyHeader}>Kendi paketini oluştur.</Text>

      <Text style={styles.bodyText}>
        Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
        miktarlardan, sana özel bir paket oluşturalım.
      </Text>
    </View>
  );
}
