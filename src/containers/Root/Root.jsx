import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import CartContext from "../../contexts/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import UserContext from "../../contexts/UserContext";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    username: "Guest",
    isLoggedIn: false,
  });

  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const logOutUser = () => {
    const defaultUser = {
      username: "Guest",
      isLoggedIn: false,
      email: null,
      token: null,
    };
    setUser(defaultUser);
    sessionStorage.setItem("user", JSON.stringify(defaultUser));
  };

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const removeCartItem = (itemId) => {
    const updated = cart.filter((item) => item.id !== itemId);
    setCart(updated);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logOutUser }}>
      <CartContext.Provider value={{ cart, addToCart, removeCartItem }}>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default Root;
