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
});

export const AuthContextProvider = (props) => {
  const [isModalHidden, setIsModalHidden] = useState(true);

  const closeModalHandler = () => {
    setIsModalHidden(true);
  };

  const openModalHandler = () => {
    setIsModalHidden(false);
  };

  return (
    <AuthContext.Provider
      value={{
        meals: DUMMY_MEALS,
        isModalHidden: isModalHidden,
        onModalClose: closeModalHandler,
        onModalOpen: openModalHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
