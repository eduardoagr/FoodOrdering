import { useCart } from "@providers/CartProvider";
import { FlatList, View } from "react-native";
import CartListItem from "./components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
        }}
      />
    </View>
  );
};

export default CartScreen;
