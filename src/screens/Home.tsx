/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import THEME from '../theme';

// import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      name: 'willyoubemygf',
      type: 'image',
      uri: require('../assets/amor.png'),
      description: 'Meu amor, você é minha luz',
      unlocked: false
    },
    {
      name: 'amor',
      type: 'image',
      uri: require('../assets/amor.jpeg'),
      description: 'Meu amor, você é minha luz',
      unlocked: true
    },
    {
      name: 'saudade',
      type: 'image',
      uri: require('../assets/amor.png'),
      description: 'Meu amor, você é minha luz',
      unlocked: false
    },
    {
      name: 'lanna',
      type: 'image',
      uri: require('../assets/amor.png'),
      description: 'Meu amor, você é minha luz',
      unlocked: false
    },
    {
      name: 'dia03',
      type: 'image',
      uri: require('../assets/amor.png'),
      description: 'Meu amor, você é minha luz',
      unlocked: false
    }
  ]);
  const [sliderIndex, setSliderIndex] = useState(0);

  const renderItem = ({
    item
  }: {
    item: {
      name: string;
      type: string;
      uri: any;
      description: string;
      unlocked: boolean;
    };
  }) => {
    if (!item.unlocked) {
      return (
        <View style={styles.itemView}>
          <FontAwesome5 name="lock" size={100} color={THEME.PRIMARY_COLOR} />
          <Text style={styles.itemText}>
            Escaneie o QR Code para desbloquear
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.itemView}>
        <Image source={item.uri} style={styles.itemImage} />
        <Text style={[styles.itemText, { fontWeight: 'bold' }]}>
          {item.description}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        style={{ paddingTop: 50 }}
        data={data}
        renderItem={renderItem}
        sliderWidth={0.8 * Dimensions.get('screen').width}
        itemWidth={0.8 * Dimensions.get('screen').width}
        firstItem={sliderIndex}
        onSnapToItem={(index) => setSliderIndex(index)}
      />
      <Pagination activeDotIndex={sliderIndex} dotsLength={5} />
      <Button
        title="Escanear QR Code"
        color={THEME.PRIMARY_COLOR}
        onPress={() => {
          navigation.navigate('ScanQRCode');
        }}
      >
        Escanear QR Code
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  itemView: {
    backgroundColor: '#FFF',
    width: 0.8 * Dimensions.get('screen').width,
    height: 0.65 * Dimensions.get('screen').height,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  itemImage: {
    width: 0.8 * Dimensions.get('screen').width,
    height: 0.8 * Dimensions.get('screen').width
  },
  itemText: {
    fontSize: 30,
    color: THEME.PRIMARY_COLOR,
    textAlign: 'center',
    marginHorizontal: 10
  }
});

export default Home;
