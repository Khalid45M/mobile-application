import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SubHeader from "../components/subHeader";
import CartProduct from "../components/CartPorduct";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { CartContext } from "../components/cartContext";
export default function Cart() {
  const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SubHeader />
      </View>

      <FlatList
        data={carts}
        renderItem={({ item }) => (
          <CartProduct item={item} deleteItemFromCart={deleteItemFromCart} />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            <View style={styles.horizontalLine} />

            <View style={styles.priceContainer}>
              <Text style={styles.priceTotal}>Total:</Text>
              <Text style={styles.priceTotal}>{totalPrice}$</Text>
            </View>
          </>
        }
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  horizontalLine: {
    height: 1,
    width: "90%",
    backgroundColor: "black",
    marginVertical: 10,
    margin: "auto",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  priceTotal: {
    color: "#757575",
    fontSize: 20,
    fontWeight: 500,
  },
  button: {
    backgroundColor: "#F9AC46",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
});
