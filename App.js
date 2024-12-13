import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "./src/pages/Home";
import User from "./src/pages/User";
import Cart from "./src/pages/Cart";
import ProductDetailsScreen from "./src/pages/ProductDetailsScreen";
import { CartProvider } from "./src/components/cartContext";
import { useContext } from "react";
import { CartContext } from "./src/components/cartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStak = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#F9AC46",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              backgroundColor: "#2F2F2F",
              padding: 20,
            },
          }}
          initialRouteName="CART"
        >
          {/* ============================ */}
          <Tab.Screen
            name="Home"
            component={HomeStak}
            options={{
              tabBarIcon: ({ size, color, focused }) => {
                return <Feather name={"home"} size={size} color={color} />;
              },
            }}
          />
          {/* ============================ */}
          <Tab.Screen
            name="CART"
            component={Cart}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { carts } = useContext(CartContext);
                return (
                  <View style={{ position: "relative" }}>
                    <Entypo name={"shopping-cart"} size={size} color={color} />
                    <View
                      style={{
                        position: "absolute",
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        backgroundColor: color,
                        alignItems: "center",
                        justifyContent: "center",
                        top: -5,
                        right: -15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "black",
                          fontWeight: 500,
                        }}
                      >
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          {/* ============================ */}
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarIcon: ({ size, color }) => {
                return <FontAwesome name={"user"} size={30} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
