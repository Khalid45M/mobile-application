import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image
          source={require("../assets/batman-logo.png")}
          style={styles.appIcon}
        />
        <Text style={styles.appName}>Gotham</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  appIconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 20,
  },
  appIcon: {
    width: 60,
    height: 45,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
