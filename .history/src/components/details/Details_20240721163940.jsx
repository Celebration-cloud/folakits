import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import MobileNav from "../reuseable/mobileNav/MobileNav";
import useWidthSize from "../reuseable/width/useWidthSize";
// import styles from "./Details.module.css";
import Content from "./Content";
function Details() {
  const { width } = useWidthSize();
const name = 
  return (
    <div>
      <Nav />
      <Content/>
      <hr />
      <Footer />
      {width < 880 && <MobileNav />}
    </div>
  );
}

export default Details;
