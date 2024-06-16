import { motion } from "framer-motion";
const ErrorElement = () => {
  return (
    <div>
      <motion.h1
        animate={{
          y: [-5, 5, -5],
          transition: {
            repeat: Infinity,
            duration: 1,
          },
        }}
        className="text-5xl items-center flex justify-center h-screen"
      >
        404 - Page Not Found
      </motion.h1>
    </div>
  );
};

export default ErrorElement;
