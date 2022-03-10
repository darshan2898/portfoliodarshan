import TechCard from "./TechCard";
import { GiVibratingSmartphone } from "react-icons/gi";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
} from "react-icons/si";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const data = [
  {
    icon: <SiHtml5 />,
    title: "Html5",
  },
  {
    icon: <SiCss3 />,
    title: "css3",
  },
  {
    icon: <SiSass />,
    title: "sass",
  },
  {
    icon: <SiBootstrap />,
    title: "Bootstrap",
  },
  {
    icon: <SiJavascript />,
    title: "Javascript",
  },
  {
    icon: <SiReact />,
    title: "React JS",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
  },
  {
    icon: <SiNextdotjs />,
    title: "NEXT JS",
  },
];

const Techs = () => {
  const { ref, inView } = useInView();
  const techsAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      techsAnimation.start({
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      techsAnimation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.section className="techs_section" animate={techsAnimation}>
      <div className="techs_container container " ref={ref}>
        <div className="left">
          {data.map((item, index) => {
            return <TechCard item={item} key={index} />;
          })}
        </div>
        <div className="right">
          <div className="top">
            <div className="frame">
              <img src="/images/frame.png" />
            </div>
            <h1>2+</h1>
            <h3>
              Years <br /> Experience <br /> Practicing
            </h3>
          </div>
          <div className="call">
            <div className="icon">
              <GiVibratingSmartphone />
            </div>
            <div className="text">
              <p>CALL AT NOW ON</p>
              <h1>(+91)-9867-581-671</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Techs;
