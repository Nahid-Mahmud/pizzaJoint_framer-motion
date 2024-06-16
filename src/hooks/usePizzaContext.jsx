// return the context value

import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContexts";

const usePizzaContext = () => {
  return useContext(PizzaContext);
};

export default usePizzaContext;
