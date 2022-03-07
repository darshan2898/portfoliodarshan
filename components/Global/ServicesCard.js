import Image from "next/image";
import { motion } from "framer-motion";

const ServicesCard = ({ pic, title, info }) => {
  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{
        scale: 0.88,
      }}
    >
      <Image src={pic} width={170} height={120} />
      <h1>{title}</h1>
      <p>{info}</p>
    </motion.article>
  );
};

export default ServicesCard;
