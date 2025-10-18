import AddToCartButton from "@/app/components/AddToCartButton";
import { defaulImage } from "@/app/components/ProductListItem";
import products from "assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const SIZE = 50;

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() == id);

  const [SelectedSize, setSelectedSize] = useState("M");

  const addToCart = () => {
    console.warn("adding to cart: ", SelectedSize);
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },

  sizeSelectorText: {
    marginStart: 5,
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
