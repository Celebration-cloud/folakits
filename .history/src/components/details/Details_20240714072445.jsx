import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
// import styles from "./Details.module.css";
import Content from "./Content";
function Details() {
  const { width } = useWidthSizee();
  return (
    <div>
      <Nav />
      <Content />
      <hr/>
      <Footer />
    </div>
  );
}

export default Details;
