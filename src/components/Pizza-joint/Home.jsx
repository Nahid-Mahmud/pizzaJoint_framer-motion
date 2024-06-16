import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function template({ rotate, x }) {
  return `rotate(${rotate}) translateX(${x})`;
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 animate={{ scale: 2, color: "white", x: 300, y: 300, transition: { duration: 1 } }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
