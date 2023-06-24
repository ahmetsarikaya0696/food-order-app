import React, { useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AuthContext = React.createContext({
  meals: [],
  isModalHidden: true,
  onModalClose: () => {},
  onModalOpen: () => {},
  cartState: {},
  onAddOrder: (name, price, number) => {},
  orders: [],
});

export const AuthContextProvider = (props) => {
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [orders, setOrders] = useState([]);

  const closeModalHandler = () => {
    setIsModalHidden(true);
  };

  const openModalHandler = () => {
    setIsModalHidden(false);
  };

  const addOrderHandler = (name, price, number) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];

      const existingOrderIndex = updatedOrders.findIndex(
        (order) => order.name === name
      );

      if (existingOrderIndex !== -1) {
        updatedOrders[existingOrderIndex].number += number;
      } else {
        updatedOrders.push({ name: name, price: price, number: number });
      }

      return updatedOrders;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        meals: DUMMY_MEALS,
        isModalHidden: isModalHidden,
        onModalClose: closeModalHandler,
        onModalOpen: openModalHandler,
        onAddOrder: addOrderHandler,
        orders: orders
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
