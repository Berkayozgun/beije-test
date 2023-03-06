import React from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Divider from './Divider';

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    height: 600,
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
  emailtextInput: {
    borderColor: '#BDBDBD',
    borderWidth: 1,
    width: 350,
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },
  sendButton: {
    backgroundColor: '#BDBDBD',
    width: 350,
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#000000',
  },
  kvkkText: {
    color: '#BDBDBD',
    width: 350,
    textAlign: 'center',
    marginTop: 10,
  },
  bottomSocailMediaLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    marginTop: 10,
  },
  socialMediaLogo: {
    width: 20,
    height: 20,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 110,
    marginTop: 10,
  },
  paymentMethodLogo: {
    width: 50,
    height: 20,
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
        placeholderTextColor={'#BDBDBD'}
        style={styles.emailtextInput}
        placeholder="E-mail adresin"
      />

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Gönder</Text>
      </TouchableOpacity>

      <Text style={styles.kvkkText}>
        Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
        beije'den haber almayı onaylıyorum.
      </Text>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Paketler</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Deneme Paketi</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Ekibimize Katıl</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column', marginTop: 10}}>
          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Blog</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Sıkça Sorulan Sorular</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>Biz Kimiz?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomSocailMediaLogos}>
        <TouchableOpacity>
          <Image
            style={styles.socialMediaLogo}
            source={require('./facebook.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.socialMediaLogo}
            source={require('./instagram.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.socialMediaLogo}
            source={require('./twitter.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.socialMediaLogo}
            source={require('./linkedin.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.socialMediaLogo}
            source={require('./spotify.png')}
          />
        </TouchableOpacity>
      </View>
      <Divider />

      <View style={styles.footerUnderDividerText}>
        <Text style={{color: '#BDBDBD', fontWeight: 'bold'}}>
          2023 beije. Tüm hakları saklıdır.
        </Text>

        <TouchableOpacity>
          <Text style={{color: '#BDBDBD'}}>KVKK Aydınlatma Metni</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: '#BDBDBD'}}>Üyelik Sözleşmesi</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: '#BDBDBD'}}>Gizlilik Politikası</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: '#BDBDBD'}}>Çerez Politikası</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: '#BDBDBD'}}>Test Sonuçları</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>EN</Text>
          </TouchableOpacity>

          <Text style={{color: '#BDBDBD'}}> | </Text>

          <TouchableOpacity>
            <Text style={{color: '#BDBDBD'}}>TR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentMethods}>
          <TouchableOpacity>
            <Image
              style={styles.paymentMethodLogo}
              source={require('./visa.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.paymentMethodLogo}
              source={require('./mastercard.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
