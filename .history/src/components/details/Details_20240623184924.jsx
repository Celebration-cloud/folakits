import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import CarouselImage from './CarouselImage';
import styles from './Details.module.css'
function Details() {
  return (
    <div>
        <Nav/>
        <div>
        <CarouselImage/>
        <div>
            <h3></h3>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Details
