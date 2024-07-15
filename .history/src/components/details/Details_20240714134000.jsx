import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import MobileNav from "../reuseable/mobileNav/MobileNav";
import useWidthSize from "../reuseable/width/useWidthSize";
// import styles from "./Details.module.css";
import Content from "./Content";
function Details({product}) {
  const { width } = useWidthSize();
  const name = useParams()
  return (
    <div>
      <Nav />
      <Content />
      <hr />
      <Footer />
      {width < 880 && <MobileNav />}
    </div>
  );
}

export default Details;
