import { createContext, useState } from "react";

// coreate a new context
export const PizzaContext = createContext(null);

const PizzaContexts = ({ children }) => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const pizzaContextsValues = {
    addBase,
    addTopping,
    pizza,
    setPizza,
  };
  return <PizzaContext.Provider value={pizzaContextsValues}>{children}</PizzaContext.Provider>;
};

export default PizzaContexts;
