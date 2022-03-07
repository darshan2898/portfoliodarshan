import {
  SiWhatsapp,
  SiInstagram,
  SiGithub,
  SiGithubsponsors,
  SiGmail,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="logo"></div>
      <h1>Follow me</h1>
      <div className="icons">
        <SiWhatsapp />
        <SiInstagram />
        <SiGithub />
        <SiGmail />
      </div>
      <p>
        Copyright ©2022 All rights reserved | This template is made with{" "}
        <SiGithubsponsors className="heart" /> by D.
      </p>
    </footer>
  );
};

export default Footer;
