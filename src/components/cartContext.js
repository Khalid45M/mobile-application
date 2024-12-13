import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

// Create CartContext
export const CartContext = createContext();

// Create CartProvider
export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let storedCarts = await AsyncStorage.getItem("carts");
    storedCarts = storedCarts ? JSON.parse(storedCarts) : [];
    setCarts(storedCarts);
    totalSum(storedCarts);
  };

  const addToCart = async (item) => {
    const itemExist = carts.findIndex((cart) => cart.id === item.id);
    if (itemExist === -1) {
      const newCartItems = [...carts, item];
      await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
      setCarts(newCartItems);
      totalSum(newCartItems);
    }
  };

  const totalSum = (cartItems) => {
    const total = cartItems.reduce((amount, item) => amount + item.price, 0);
    setTotalPrice(total);
  };

  const deleteItemFromCart = async (item) => {
    const newItems = carts.filter((cart) => cart.id !== item.id);
    setCarts(newItems);
    await AsyncStorage.setItem("carts", JSON.stringify(newItems));
    totalSum(newItems);
  };

  const value = {
    carts,
    addToCart,
    totalPrice,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
