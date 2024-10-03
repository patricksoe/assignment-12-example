import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const removeCartItem = (itemId) => {
    const updated = cart.filter((item) => item.id !== itemId);
    setCart(updated);
  };

  return (
    <UserContext.Provider value={{ cart, addToCart, removeCartItem }}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </UserContext.Provider>
  );
};

export default Root;
