import React, { useContext } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";
import AuthContext from "../../context/auth-context";

const MealList = () => {
  const ctx = useContext(AuthContext);

  return (
    <Card>
      <ul>
        {ctx.meals.map((meal) => (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MealList;
