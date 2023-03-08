import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Tab, TabView, Slider, Icon} from '@rneui/themed';
import {Image} from '@rneui/base';

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
    alignSelf: 'center',
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
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 370,
    height: 570,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 500,
    shadowRadius: 4,
    elevation: 200,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  modalHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
  },
  modalHeader: {
    fontFamily: 'Gordita',
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'left',
    width: 150,
    lineHeight: 30,
    margin: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    marginRight: 20,
  },
  closeButtonImage: {
    width: 40,
    height: 40,
  },
  modalShippingFreq: {
    width: 300,
    height: 50,
    backgroundColor: '#Ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  shippingFreqIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  modalShippingFreqText: {
    fontFamily: 'Gordita',
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#000',
    textAlign: 'left',
    width: 150,
    lineHeight: 30,
    marginLeft: 10,
  },
  modalImage: {
    width: 300,
    height: 140,
    alignSelf: 'center',
    margin: 20,
  },
  shippingSummary: {
    width: 300,
    height: 130,
    backgroundColor: '#Ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  shippingSummaryHeader: {
    fontFamily: 'Gordita',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    width: 150,
    lineHeight: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  shippingSummaryText: {
    fontFamily: 'Gordita',
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey',
    textAlign: 'left',
    width: 250,
    marginLeft: 20,
  },
  deleteFromBucket: {
    width: 100,
    height: 30,
  },
  deleteFromBucketText: {
    fontFamily: 'Gordita',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width: 100,
    marginLeft: 20,
    marginTop: 10,
  },
  addToBucket: {
    width: 300,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToBucketText: {
    fontFamily: 'Gordita',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    width: 250,
    lineHeight: 30,
  },
});

export default function Body() {
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
        <TabView.Item> red</TabView.Item>
        <TabView.Item>blue</TabView.Item>
        <TabView.Item>green</TabView.Item>
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
              <View style={styles.modalHeaderContainer}>
                <Text style={styles.modalHeader}>Özel Paketin</Text>

                <TouchableOpacity style={styles.closeButton}>
                  <Image
                    style={styles.closeButtonImage}
                    source={require('../Images/exitModal.png')}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.modalShippingFreq}>
                <Image
                  style={styles.shippingFreqIcon}
                  source={require('../Images/loop.png')}
                />
                <Text style={styles.modalShippingFreqText}>
                  2 ayda 1 gönderim
                </Text>
              </View>

              <Image
                style={styles.modalImage}
                source={require('../Images/beije_modal_image.png')}
              />

              <View style={styles.shippingSummary}>
                <Text style={styles.shippingSummaryHeader}>Ped Paketleri</Text>

                <Text style={styles.shippingSummaryText}>
                  {standartValue} Standart Ped, {superValue} Süper Ped,{' '}
                  {superPlusValue} Süper+ Ped
                </Text>

                <TouchableOpacity style={styles.deleteFromBucket}>
                  <Text style={styles.deleteFromBucketText}>
                    Paketten Çıkar
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addToBucket}>
                <Text style={styles.addToBucketText}>
                  Sepete Ekle (₺{totalPrice})
                </Text>
              </TouchableOpacity>
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
