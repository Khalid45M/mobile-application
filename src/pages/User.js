import { View, ScrollView, Image, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import SubHeader from "../components/subHeader";

export default function User() {
  return (
    <ScrollView style={styles.container}>
      <SubHeader />
      <View style={styles.userContainer}>
        <Image
          source={require("../assets/user.jpg")}
          style={styles.userImage}
        />
        <View style={styles.userName}>
          <Text style={styles.name}>Name</Text>
          <TextInput style={styles.nameInput} defaultValue="username" />
        </View>
        <View style={styles.userName}>
          <Text style={styles.name}>Email</Text>
          <TextInput style={styles.nameInput} defaultValue="user@gmail.com" />
        </View>
        <View style={styles.userName}>
          <Text style={styles.name}>Password</Text>
          <TextInput
            style={styles.nameInput}
            secureTextEntry={true}
            defaultValue="user@"
          />
        </View>
        <View style={styles.userName}>
          <Text style={styles.name}>Country</Text>
          <TextInput style={styles.nameInput} defaultValue="Egypt" />
        </View>
        <View style={styles.userName}>
          <Text style={styles.name}>Address</Text>
          <TextInput style={styles.nameInput} defaultValue="desouk/street1" />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userContainer: {
    marginTop: 30,
    padding: 15,
  },
  userName: {
    marginBottom: 20,
  },
  userImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#F9AC46",
    borderStyle: "solid",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
  },
  nameInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#F4F3F8",
    borderStyle: "solid",
  },
});
