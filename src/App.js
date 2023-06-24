import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";
import MealList from "./components/Meals/MealsList";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <MealList />
    </Fragment>
  );
}

export default App;
