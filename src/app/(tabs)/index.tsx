import products from '@/assets/data/products';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
});
