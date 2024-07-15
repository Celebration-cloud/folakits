import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import CarouselImage from './CarouselImage';
import styles from './Details.module.css'
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
            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details
