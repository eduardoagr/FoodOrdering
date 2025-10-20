import ProductListItem from "@components/ProductListItem";
import products from "assets/data/products";
import { FlatList } from "react-native";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      numColumns={1}
      renderItem={({ item }) => <ProductListItem product={item} />}
      contentContainerStyle={{
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
