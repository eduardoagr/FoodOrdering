import Colors from "@constants/Colors";
import { Product } from "assets/types";
import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export const defaulImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaulImage }}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  container: {
    marginRight: 10,
    width: Dimensions.get("window").width * 0.68,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    flex: 1,
    minWidth: "60%",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 2,
    flexWrap: "wrap",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
