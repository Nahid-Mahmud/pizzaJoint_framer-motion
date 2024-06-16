import usePizzaContext from "../../hooks/usePizzaContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Order = ({}) => {
  const { pizza } = usePizzaContext();
  return (
    <>
      <div className="container order">
        <h2>Thank you for your order :)</h2>
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </div>
      <Link to={"/"} className="flex">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 5px 8px rgb(255,255,255)",
          }}
        >
          Go Home
        </motion.button>
      </Link>
    </>
  );
};

export default Order;
