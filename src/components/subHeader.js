import { View, Image, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function SubHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        {isCart ? (
          <AntDesign name={"doubleleft"} size={25} style={styles.backIcon} />
        ) : (
          false
        )}
      </TouchableOpacity> */}

      <Text style={styles.textLogo}>Gotham</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F2F2F",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  // backIcon: {
  //   color: "#F9AC46",
  // },
  textLogo: {
    color: "white",
    fontSize: 25,
    fontWeight: 600,
  },
});
