import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const MealList = () => {
  return (
    <Card>
      <ul>
        <MealItem />
      </ul>
    </Card>
  );
};

export default MealList;
