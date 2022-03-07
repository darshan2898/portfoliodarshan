import { motion } from "framer-motion";

const projectsData = [
  {
    pic: "/images/bar.png",
    title: "Costo-Bar",
    stacks: [
      "HTML",
      "CSS",
      "SASS",
      "JAVASCRIPT",
      "RECT.JS",
      "STYLED-COMPONENTS",
    ],
    url: "https://costo-bar.netlify.app/",
    desc: "Costo-bar is a website for simple restaurant and bar. there are 4 pages HOME-PAGE,MENU-PAGE,CONTACT-PAGE and ERROR-PAGE. All the styling is done with STYLED-COMPONENTS.all the routing is done with latest version of react router 6.Purpose behind this project is to learn styled-components in react.Home page has sections representing about restaurant , daily special menu items,reason for booking an appointment and banner.Menu page has menu of restaurant divided in three parts consisting Appetizers,drinks & other. all the data is coming from local data.js file including images. all the data is sated locally with useState hook nested looping over with array.map.contact page has Two sections one is contact form and second is address and contact info of restaurant.",
  },
  {
    pic: "/images/recipes.png",
    title: "Quick Recipe",
    stacks: [
      "HTML",
      "CSS",
      "SASS",
      "JAVASCRIPT",
      "RECT.JS",
      "REACT-HOOKS",
      "FIREBASE-DB",
    ],
    url: "https://quickrecipe.netlify.app/",
    desc: "In This website there are total 5 pages that is HOME-PAGE,RECIPES-PAGE,FAVORITES-PAGE,CONTACT-PAGE & ERROR-PAGE.with the help of react-router i've setup all routing across website. all the styling is done with SASS.Home page mostly consist of basic view, Recipes page where all recipes are coming from mealdbapi. there is categories section also coming from same api with js fetch method.at the top of page there is search bar where user can search any dish recipe. if recipe is available of respective search item recipes will pop-up on screen nd if not message gets pop-up as search recipe is not available.You can choose any dish on screen to get recipe info of dish.user have an option to add particular dish recipe into favorites section. added recipes will pop-up on favorites page. favorites recipes stored in firebase database and it coming from firebase. user can also remove recipes from favorites page. on adding and removing action there's notification pop-up on screen. functionality is setup with useContext, useReducer,useState, and useState hooks.",
  },
  {
    pic: "/images/law.png",
    title: "Universal Law Firm",
    stacks: ["HTML", "CSS", "SASS", "JAVASCRIPT", "ANIMATE.CSS"],
    url: "https://darshan2898.github.io/universal/",
    desc: "",
  },
  {
    pic: "/images/todoredux.png",
    title: "TO-DO List",
    stacks: ["HTML", "CSS", "SASS", "JAVASCRIPT", "RECT.JS", "REDUX"],
    url: "https://grocery-budddy.netlify.app/",
    desc: "simple similar to todo-list application. user can add item. as soon as user add item item gets add in the below list from there user can delete items too. on adding and deleing notification will popup. on different actions color of notifications is different on adding the color is green and notified message is item added successfully and on deleting the color is red and notified message is item deleted successfully. everything is happening on run time.animation, local-storage and edit item functionality is still under Process ",
  },
  {
    pic: "/images/rosa.png",
    title: "The Rosa",
    stacks: ["HTML", "CSS", "SASS", "JAVASCRIPT", "ANIMATION"],
    url: "https://darshan2898.github.io/rosa.github.io/",
    desc: "",
  },
  {
    pic: "/images/tattoo.png",
    title: "Tattoo Shop",
    stacks: ["HTML", "CSS", "SASS", "JAVASCRIPT", "ANIMATION"],
    url: "https://darshan2898.github.io/tattooshop.io/",
    desc: "",
  },
];

const ProjectCard = () => {
  return (
    <>
      {projectsData.map((project, index) => {
        const { pic, title, stacks, url, desc } = project;
        return (
          <a href={url} key={index} target="_blank">
            <motion.article
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.888,
                opacity: 0.6,
              }}
            >
              <img src={pic} alt="" />
              <h1>{title}</h1>
              <div className="tags">
                {stacks.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
              <div className="desc">
                <p> {desc ? desc : "[ NA ]"} </p>
              </div>
            </motion.article>
          </a>
        );
      })}
    </>
  );
};

export default ProjectCard;
