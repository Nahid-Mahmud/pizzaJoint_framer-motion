import React from "react";
import { Link } from "react-router-dom";
import usePizzaContext from "../../hooks/usePizzaContext";
import { motion } from "framer-motion";

const Base = () => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const { addBase, pizza } = usePizzaContext();

  const BaseVarient = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={BaseVarient}
      initial="hidden"
      animate="visible"
      // initial={{
      //   x: "-100vw",
      // }}
      // animate={{
      //   x: 0,
      // }}
      transition={{
        type: "spring",
        stiffness: 55,
      }}
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: -0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 130,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            delay: 0.3,
            stiffness: 140,
          }}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 5px 8px rgb(255,255,255)",
              }}
              className="hover:font-bold"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
