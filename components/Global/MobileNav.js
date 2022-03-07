import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="mobile_nav">
      <div className="nav_container">
        <div className="top">
          <div className="logo">
            <Image
              src={"/images/dlogotransparent.png"}
              width={130}
              height={70}
            />
          </div>
          <div className="toggler">
            {toggle ? (
              <motion.div
                animate={{
                  opacity: toggle ? 1 : 0,
                }}
              >
                <FaBars
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  opacity: !toggle ? 1 : 0,
                }}
              >
                <FaTimes
                  className="times"
                  onClick={() => {
                    setToggle(true);
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
        <motion.div
          className="bottom"
          animate={{
            x: toggle ? "100vw" : 0,
            opacity: toggle ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
          }}
        >
          <ul className="nav_list">
            <li>
              <Link href={"/"}>
                <a style={{ borderBottom: "2px solid black" }}>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a style={{ borderBottom: "2px solid black" }}>About Me</a>
              </Link>
            </li>
            <li>
              <Link href={"/services"}>
                <a style={{ borderBottom: "2px solid black" }}>Services</a>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <a style={{ borderBottom: "2px solid black" }}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <a style={{ borderBottom: "2px solid black" }}>Contact Me</a>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileNav;
