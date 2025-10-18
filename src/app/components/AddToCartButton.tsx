import Colors from "@constants/Colors";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const AddToCartButton = ({ text, onPress }: ButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
