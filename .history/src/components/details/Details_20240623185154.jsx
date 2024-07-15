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
            cl="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span cl="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a cl="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a cl="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a cl="dropdown-item" href="#">
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
