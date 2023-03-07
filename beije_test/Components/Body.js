import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Tab, TabView, Slider, Icon} from '@rneui/themed';

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 800,
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
  tabText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#BDBDBD',
    height: 75,
  },

  tabContainer: {
    width: 350,
    height: 75,
    marginTop: 20,
  },
  tabviewContainer: {
    width: 350,
    height: 300,
    marginTop: 20,
  },
  pedCesitleriTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'left',
    width: 350,
    lineHeight: 30,
    marginTop: 2,
  },
  seePackageButton: {
    width: 350,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default function Body() {
  const [index, setIndex] = useState(0);
  const [standartValue, setStandartValue] = useState(0);
  const [superValue, setSuperValue] = useState(0);
  const [superPlusValue, setSuperPlusValue] = useState(0);

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodyHeader}>Kendi paketini oluştur.</Text>

      <Text style={styles.bodyText}>
        Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
        miktarlardan, sana özel bir paket oluşturalım.
      </Text>

      <Tab
        style={styles.tabContainer}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#000',
          height: 3,
        }}>
        <Tab.Item title="beije Ped" titleStyle={styles.tabText} />
        <Tab.Item title="beije Günlük Ped" titleStyle={styles.tabText} />
        <Tab.Item title="beije Tampon" titleStyle={styles.tabText} />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        style={styles.tabviewContainer}>
        <TabView.Item></TabView.Item>
      </TabView>
      <View style={{width: 350, height: 400}}>
        <Text style={styles.pedCesitleriTitle}>Standart Ped</Text>
        <Slider
          value={standartValue}
          onValueChange={setStandartValue}
          maximumValue={60}
          minimumValue={0}
          step={10}
          allowTouchTrack
          trackStyle={{height: 5, backgroundColor: 'transparent'}}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: 'transparent',
          }}
          thumbProps={{
            children: (
              <Icon
                type="font-awesome"
                size={10}
                reverse
                containerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                  marginLeft: 0,
                }}
              />
            ),
          }}
        />
        <Text style={{paddingTop: 20}}>{standartValue}</Text>

        <Text style={styles.pedCesitleriTitle}>Süper Ped</Text>
        <Slider
          value={superValue}
          onValueChange={setSuperValue}
          maximumValue={60}
          minimumValue={0}
          step={10}
          allowTouchTrack
          trackStyle={{height: 5, backgroundColor: 'transparent'}}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: 'transparent',
          }}
          thumbProps={{
            children: (
              <Icon
                type="font-awesome"
                size={10}
                reverse
                containerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                  marginLeft: 0,
                }}
              />
            ),
          }}
        />
        <Text style={{paddingTop: 20}}>{superValue}</Text>

        <Text style={styles.pedCesitleriTitle}>Süper+ Ped</Text>
        <Slider
          value={superPlusValue}
          onValueChange={setSuperPlusValue}
          maximumValue={60}
          minimumValue={0}
          step={10}
          allowTouchTrack
          trackStyle={{height: 5, backgroundColor: 'transparent'}}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: 'transparent',
          }}
          thumbProps={{
            children: (
              <Icon
                type="font-awesome"
                size={10}
                reverse
                containerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                  marginLeft: 0,
                }}
              />
            ),
          }}
        />
        <Text style={{paddingTop: 20}}>{superPlusValue}</Text>
        <TouchableOpacity style={styles.seePackageButton}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'semibold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Paketini Gör
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
