import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Navbar = () => {
  const { cart } = useContext(UserContext);

  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart [{cart.length}]</NavLink>
    </nav>
  );
};

export default Navbar;
