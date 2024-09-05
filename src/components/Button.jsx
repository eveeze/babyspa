import React from "react";
import { motion } from "framer-motion";

const Button = ({ label, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-ternary transition-all"
    >
      {label}
    </motion.button>
  );
};

export default Button;
