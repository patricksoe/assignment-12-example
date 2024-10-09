import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const {
    user: { isLoggedIn },
    logOutUser,
  } = useContext(UserContext);

  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart [{cart.length}]</NavLink>
      {isLoggedIn ? (
        <NavLink onClick={logOutUser}>Logout</NavLink>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
