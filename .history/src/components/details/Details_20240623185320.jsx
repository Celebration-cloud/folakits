import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import CarouselImage from "./CarouselImage";
import styles from "./Details.module.css";
function Details() {
  return (
    <div>
      <Nav />
      <div>
        <CarouselImage />
        <div>
          <h3>Pastel Jacket With Bejewelled Collar</h3>
          <span>79.99 GBP</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SIZE
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
