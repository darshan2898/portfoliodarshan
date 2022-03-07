import Footer from "./Global/Footer";
import MobileNav from "./Global/MobileNav";
import NavBar from "./Global/NavBar";

const LayOut = ({ children }) => {
  return (
    <div className="page">
      <NavBar />
      <MobileNav />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
