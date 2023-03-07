import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
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
  centeredView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  modalView: {
    width: 350,
    height: 500,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function Body(props) {
  const [index, setIndex] = useState(0);

  const [standartValue, setStandartValue] = useState(0);
  const [superValue, setSuperValue] = useState(0);
  const [superPlusValue, setSuperPlusValue] = useState(0);

  const handleSliderStandart = value => {
    setStandartValue(value);
  };

  const handleSliderSuper = value => {
    setSuperValue(value);
  };

  const handleSliderSuperPlus = value => {
    setSuperPlusValue(value);
  };

  const totalPrice = (
    (standartValue / 10) * 29.73 +
    (superValue / 10) * 33.27 +
    (superPlusValue / 10) * 37.48
  ).toFixed(2);

  const [modalVisible, setModalVisible] = useState(false);

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
          onValueChange={value => handleSliderStandart(value)}
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
          onValueChange={value => handleSliderSuper(value)}
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
          onValueChange={value => handleSliderSuperPlus(value)}
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

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Özel Paketin</Text>

              <View style={styles.modalShippingFreq}>
                <Text style={styles.modalShippingFreqText}>
                  2 ayda 1 gönderim
                </Text>

                <View style={styles.shippingSummary}>
                  <Text style={styles.shippingSummaryHeader}>
                    Ped Paketleri
                  </Text>

                  <Text style={styles.shippingSummaryText}>
                    {standartValue} adet standart ped
                    {superValue} adet süper ped
                    {superPlusValue} adet süper+ ped
                  </Text>

                  <TouchableOpacity style={styles.deleteFromBucket}>
                    <Text style={styles.deleteFromBucketText}>
                      Paketten Çıkar
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.addToBucket}>
                    <Text style={styles.addToBucketText}>
                      Sepete Ekle {totalPrice}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.seePackageButton}
          onPress={() => setModalVisible(!modalVisible)}>
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
