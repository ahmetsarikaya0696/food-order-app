import React, { Fragment, useContext } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import MealList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal/Modal";
import AuthContext from "./context/auth-context";
import Cart from "./components/Cart/Cart";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <MealList />
      {!ctx.isModalHidden && (
        <Modal>
          <Cart />
        </Modal>
      )}
    </Fragment>
  );
}

export default App;
