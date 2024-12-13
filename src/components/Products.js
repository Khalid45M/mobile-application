import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Products({ item, handelLike }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        navigation.navigate("ProductDetails", { item });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{`${item.price}$`}</Text>
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          handelLike(item);
        }}
      >
        {item?.isLike ? (
          <AntDesign name={"heart"} size={26} color={"#F9AC46"} />
        ) : (
          <AntDesign name={"hearto"} size={26} color={"#F9AC46"} />
        )}
      </TouchableOpacity>
      ;
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0F8FF",
    padding: 10,
    borderRadius: 20,
    position: "relative",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  coverImage: {
    height: 250,
    width: "100%",
    borderRadius: 20,
    marginVertical: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "black",
  },
  price: {
    fontSize: 16,
    color: "black",
  },
  likeContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#ffffff",
    width: 44,
    height: 44,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
