import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    };
    fetchData();
  });

  return (
    <div className="grid">
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Rp. {item.price.toLocaleString()}</p>
          <br />
          <br />
          {cart.find((cartItem) => cartItem.id === item.id) ? (
            <button disabled>Added to cart</button>
          ) : (
            <button onClick={() => addToCart(item)}>Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
