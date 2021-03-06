import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const { ref, inView } = useInView();
  const aboutAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      aboutAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 80,
        },
      });
    }
    if (!inView) {
      aboutAnimation.start({
        x: -300,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.section className="about_section" animate={aboutAnimation}>
      <div className="about_container container" ref={ref}>
        <div className="left">
          <img src="/images/aboutlogo.png" alt="" />
        </div>
        <div className="right">
          <motion.h1>
            LET ME INTRODUCE <br /> ABOUT <span>MYSELF</span>
          </motion.h1>
          <motion.p>
            My self Darshan Ahire. I am from ghatkopar (west). I have Completed
            my Graduation from P.V.G. College of science and Technology in 2018.
          </motion.p>
          <motion.p>
            The set of skills i am familiar with are React.JS , Next.JS ,
            Javascript and etc. , Right now i am learning the unit Testing
            pattern to create more scalable application. I want to gain more
            experience on professional and corporate level cause I love what i
            do, assembling different different part of UI/UX. I personally seek
            to get more proficient with my skills.
          </motion.p>
          <Link href={"/contact"}>
            <button>Contact Details</button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
