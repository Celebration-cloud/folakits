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
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
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
      <Footer />
    </div>
  );
}

export default Details;
