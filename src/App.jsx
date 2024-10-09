import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./containers/Root/Root";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Checkout from "./containers/Checkout/Checkout";
import ProtectedRoute from "./containers/ProtectedRoute/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
