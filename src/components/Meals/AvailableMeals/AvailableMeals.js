import React, { useEffect, useState } from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import useHttp from "../../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    const transformMeals = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-6f76f-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  let content = <h2>No meals found!</h2>;

  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  
  if(error){
    content =  <h2>Error : {error}</h2>;
  }

  if(isLoading){
    content = "Loading Meals...";
  }

  return (
    <Card>
      <ul>{content}</ul>
    </Card>
  );
};

export default AvailableMeals;
