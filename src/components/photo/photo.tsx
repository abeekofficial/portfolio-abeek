import abeek from "@/assets/img/abeek.png";
import { motion } from "framer-motion";
export default function Photo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2,
          ease: "easeIn",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2.4,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten object-cover">
          <img src={abeek} alt="abeek" />
        </div>
      </motion.div>
    </motion.div>
  );
}
