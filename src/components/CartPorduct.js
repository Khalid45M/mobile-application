import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function CartProduct({ item, deleteItemFromCart }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />

      <View style={styles.contant}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price}$</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            deleteItemFromCart(item);
          }}
        >
          <FontAwesome5 name={"trash"} size={25} style={styles.trashIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "25%",
    height: 125,
    resizeMode: "contain",
  },
  contant: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    gap: 7,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    color: "#757575",
    maxWidth: 200,
  },
  trashIcon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    color: "#F9AC46",
    marginRight: 5,
  },
});
