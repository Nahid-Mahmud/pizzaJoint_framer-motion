import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container" animate={{ opacity: [0, 1], transition: { duration: 1,  } }}>
      <motion.h2
        animate={{
          scale: [1, 1.5],
          transition: {
            duration: 0.5,
          },
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
