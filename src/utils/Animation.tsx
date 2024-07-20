import { motion } from "framer-motion";

const Animation = ({ children }) => {
  return (
    <motion.div
      key={"dialogue"}
      {...{
        initial: { opacity: 0, translateX: "-5%" },
        animate: { opacity: 1, translateX: 0 },
        exit: { opacity: 0 },
        transition: { bounce: 0, duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
