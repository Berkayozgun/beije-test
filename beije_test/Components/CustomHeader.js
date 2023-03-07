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
    height: 70,
    paddingLeft: 40,
    paddingTop: 20,
  },
  sideHeaderBar: {
    flexDirection: 'row',
    paddingRight: 40,
  },
  beijeLogo: {
    width: 70,
    height: 40,
  },
  shoppingcart: {
    width: 30,
    height: 30,
    margin: 10,
  },
  profile: {
    width: 30,
    height: 30,
    margin: 10,
  },
  hamburgerMenu: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export default function CustomHeader() {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity>
        <Image
          style={styles.beijeLogo}
          source={require('../Images/beije_logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.sideHeaderBar}>
        <TouchableOpacity>
          <Image
            style={styles.shoppingcart}
            source={require('../Images/shoppingcart.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={require('../Images/profile.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.hamburgerMenu}
            source={require('../Images/hamburgermenu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
