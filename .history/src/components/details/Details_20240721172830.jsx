import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import MobileNav from "../reuseable/mobileNav/MobileNav";
import useWidthSize from "../reuseable/width/useWidthSize";
// import styles from "./Details.module.css";
import Content from "./Content";
function Details({detailsRef}) {
  const { width } = useWidthSize();
const {name }= useParams()
deta
  return (
    <div>
      <Nav />
      <Content preview={name}/>
      <hr />
      <Footer />
      {width < 880 && <MobileNav />}
    </div>
  );
}

export default Details;
