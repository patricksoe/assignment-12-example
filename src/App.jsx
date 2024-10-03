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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
