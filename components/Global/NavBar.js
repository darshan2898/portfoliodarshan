import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsPhoneVibrate } from "react-icons/bs";

const NavBar = () => {
  const navVariant = {
    from: {
      y: -300,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.nav variants={navVariant} initial="from" animate="to">
      <div className="navbar container">
        <div className="logo">
          <Image
            src="/images/dlogotransparent.png"
            alt="logo"
            width={130}
            height={65}
          />
        </div>
        <ul className="nav_items">
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href={"/services"}>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
        <motion.button
          className="active_contact_btn"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.01,
          }}
        >
          <Link href={"/contact"}>
            <a>
              <span> Contact Me</span>
              <motion.small
                animate={{
                  x: [0, 2, 0, -2, 0],
                  scale: [0.98, 1, 0.88],
                }}
                transition={{
                  repeat: Infinity,
                }}
              >
                <BsPhoneVibrate />
              </motion.small>
            </a>
          </Link>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
