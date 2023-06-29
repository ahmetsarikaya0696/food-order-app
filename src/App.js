import React, { useState } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
