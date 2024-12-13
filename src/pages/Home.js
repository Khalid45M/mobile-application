import { View, TextInput, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import data from "../data/data";

export default function Home() {
  const [products, setProductsData] = useState(data.products);
  const handelLike = (item) => {
    const newPorduct = products.map((prod) => {
      if (prod.id == item.id) {
        return {
          ...prod,
          isLike: !prod.isLike,
        };
      }
      return prod;
    });
    setProductsData(newPorduct);
  };
  return (
    <View style={styles.homeContainer}>
      <Header />
      <View style={styles.inputContainer}>
        <AntDesign name={"search1"} size={26} color={"#F9AC46"} />;
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor="white"
        />
      </View>

      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <Products item={item} handelLike={handelLike} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#2F2F2F",
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 5,
    gap: 5,
  },
  TextInput: {
    flex: 1,
    color: "white",
    height: 50,
    fontSize: 16,
  },
});
