import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.div
        className="absolute inset-0"
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(to bottom, black, #7DFFAF)",
        }}
      ></motion.div>
      <motion.div
        className="text-white text-4xl font-bold z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
}
