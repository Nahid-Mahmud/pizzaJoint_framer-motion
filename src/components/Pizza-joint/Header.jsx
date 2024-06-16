// import motion from framer-motion
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <motion.div
        onClick={() => navigate("/")}
        animate={{
          y: [-5, 5, -5],
          transition: {
            repeat: Infinity,
            // duration: 0.9,
          },
        }}
        className="logo cursor-pointer"
      >
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="none" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </motion.div>
      <motion.div
        initial={{
          y: -250,
        }}
        animate={{
          y: -10,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 140,
        }}
        className="title"
      >
        {/* initial for defining initial state */}
        <motion.h1 className="text-3xl">Pizza Joint</motion.h1>
      </motion.div>
    </header>
  );
};

export default Header;
