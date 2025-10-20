import { useCart } from "@providers/CartProvider";
import { FlatList, Text, View } from "react-native";
import AddToCartButton from "./components/AddToCartButton";
import CartListItem from "./components/CartListItem";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{
          gap: 10,
        }}
      />
      {items.length > 0 ? (
        <>
          <Text
            style={{
              marginTop: 20,
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "flex-end",
            }}
          >
            Total: {total}
          </Text>
          <AddToCartButton
            text="Checkout"
            onPress={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </>
      ) : null}
    </View>
  );
};

export default CartScreen;
