import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Tab, TabView, Slider, Icon} from '@rneui/themed';

const styles = StyleSheet.create({
  bodyContainer: {
    fontFamily: 'Gordita',
    flex: 1,
    backgroundColor: '#F9F5F2',
    alignItems: 'center',
    height: 850,
  },
  bodyHeader: {
    fontFamily: 'Gordita',
    fontSize: 34,
    fontWeight: 600,
    color: '#000000',
    textAlign: 'left',
    marginTop: 100,
    lineHeight: 40,
    letterSpacing: 0.5,
  },
  bodyText: {
    fontFamily: 'Gordita',
    fontSize: 20,
    color: 'grey',
    textAlign: 'left',
    width: 350,
    lineHeight: 30,
    marginTop: 20,
  },
  tabText: {
    fontFamily: 'Gordita',
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    height: 100,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },

  tabContainer: {
    fontFamily: 'Gordita',
    backgroundColor: '#F9F5F2',
    width: 350,
    height: 75,
    marginTop: 20,
  },
  tabviewContainer: {
    fontFamily: 'Gordita',
    width: 350,
    height: 300,
    marginTop: 20,
  },
  pedCesitleriTitle: {
    fontFamily: 'Gordita',
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'left',
    width: 350,
    lineHeight: 30,
    marginTop: 2,
  },
  seePackageButton: {
    fontFamily: 'Gordita',
    width: 350,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    marginTop: 25,
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
      <View style={{width: 350, height: 450}}>
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
