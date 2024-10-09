import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../contexts/CartContext";

const Cart = () => {
  const { cart, removeCartItem } = useContext(CartContext);

  return (
    <div className="cart">
      <p>Items in cart: {cart.length}</p>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-text">
                {item.name}
                Rp. {item.price.toLocaleString()}
                <br />
                <br />
                <button onClick={() => removeCartItem(item.id)}>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
          <Link to="/checkout">BUY NOW</Link>
        </>
      ) : (
        <>
          <p>No items in cart</p>
          <p>
            Checkout our products <Link to="/">here</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
