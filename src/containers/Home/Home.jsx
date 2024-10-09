import { useContext, useEffect, useState } from "react";

import CartContext from "../../contexts/CartContext";
import handlers from "./Home.handler";

const { fetchProducts } = handlers;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [hasErrorFetching, setHasErrorFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        setHasErrorFetching(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderProductList = () => {
    return products.map((item) => (
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
    ));
  };

  function renderPageContent() {
    return hasErrorFetching ? (
      <p>There was an error, please try again.</p>
    ) : (
      renderProductList()
    );
  }

  return (
    <div className="grid">
      {isLoading ? <div className="loader"></div> : renderPageContent()}
    </div>
  );
};

export default Home;
