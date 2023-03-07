import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: 50,
    padding: 10,
  },
  sideHeaderBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  beijeLogo: {
    width: 50,
    height: 20,
  },
  shoppingcart: {
    width: 20,
    height: 20,
  },
  profile: {
    width: 20,
    height: 20,
  },
  hamburgerMenu: {
    width: 20,
    height: 20,
  },
});

export default function CustomHeader() {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity>
        <Image style={styles.beijeLogo} source={require('./beije_logo.png')} />
      </TouchableOpacity>

      <View style={styles.sideHeaderBar}>
        <TouchableOpacity>
          <Image
            style={styles.shoppingcart}
            source={require('./shoppingcart.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.profile} source={require('./profile.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.hamburgerMenu}
            source={require('./hamburgermenu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
