import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import styles from "./Details.module.css";
import Content from "./Content";
function Details() {
  return (
    <div>
      <Nav />
      <Content styles={styles}/>
      <hr/>
      <Footer />
    </div>
  );
}

export default Details;
