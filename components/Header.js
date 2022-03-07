import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const headerVariant = {
  from: {
    x: "-100vh",
    opacity: 0,
  },
  to: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      type: "spring",
      bounce: 0.3,
    },
  },
};

const childVariant = {
  from: {},
  to: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Header = () => {
  return (
    <motion.header variants={headerVariant} initial="from" animate="to">
      <div className="home_header container">
        <div className="hero">
          <motion.div className="left" variants={childVariant}>
            <motion.div className="top" variants={headerVariant}>
              <h2>HELLO</h2>
              <div className="line"></div>
            </motion.div>
            <motion.h1 variants={headerVariant}>
              I AM <motion.span variants={headerVariant}>DARSHAN</motion.span>{" "}
            </motion.h1>
            <motion.h3 variants={headerVariant}>JUNIOR UX DEVELOPER</motion.h3>
            <motion.div className="btns" variants={headerVariant}>
              <Link href={"/contact"}>
                <button className="hire_me_btn">Hire Me</button>
              </Link>
              <Link href={"/contact"}>
                <button>
                  <span>Contact Details</span>
                  <span>
                    <BsArrowRight className="icon" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <div className="right">
            <Image
              src={"/images/aboutlogosecond.png"}
              width={750}
              height={500}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
