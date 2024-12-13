import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SubHeader from "../components/subHeader";
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "../components/cartContext";

export default function ProductDetailsScreen() {
  const Route = useRoute();
  const item = Route.params.item;
  const { addToCart } = useContext(CartContext);
  const handelAddToCart = () => {
    addToCart(item);
  };
  return (
    <ScrollView style={styles.container}>
      <SubHeader />
      <View style={styles.ProductDetailsCotainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.InfoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price}$</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={(item) => {
            handelAddToCart(item);
          }}
        >
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    marginTop: 5,
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  InfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#444444",
    width: 200,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "#F9AC46",
  },
  description: {
    fontSize: 18,
    paddingHorizontal: 20,
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
