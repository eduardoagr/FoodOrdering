import AddToCartButton from "@/app/components/AddToCartButton";
import { defaulImage } from "@/app/components/ProductListItem";
import { useCart } from "@/app/providers/CartProvider";
import { PizzaSize } from "@assets/types";
import products from "assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const SIZE = 50;

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const router = useRouter();

  const { addItem } = useCart();

  const product = products.find((p) => p.id.toString() == id);

  const [SelectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, SelectedSize);

    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image || defaulImage }}
      />

      <Text style={styles.sizeSelectorText}>Select Size</Text>

      <View style={styles.sizes}>
        {sizes.map((s) => (
          <Pressable
            onPress={() => {
              setSelectedSize(s);
            }}
            style={[
              styles.size,
              { backgroundColor: SelectedSize === s ? "#dcdcdc" : "white" },
            ]}
            key={s}
          >
            <Text
              style={[
                styles.sizeText,
                { color: SelectedSize === s ? "black" : "#8080805e" },
              ]}
            >
              {s}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
      <AddToCartButton onPress={addToCart} text="Add to cart" />
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#060606",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },

  sizeSelectorText: {
    marginStart: 5,
    color: "white",
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "bold",
  },

  sizes: {
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },

  size: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },

  sizeText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    color: "black",
  },
});
