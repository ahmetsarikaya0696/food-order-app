import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import MealItem from "./components/Meals/MealItem/MealItem";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <MealItem />
    </Fragment>
  );
}

export default App;
