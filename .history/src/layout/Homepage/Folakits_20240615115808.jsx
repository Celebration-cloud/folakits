import FirstContent from '../../components/FirstContent/FirstContent';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter';
import Service from '../../components/offers/Service';
import styles from './Folakits.module.css'
function Folakits() {
  return (
    <div>
      <Nav />
      <FirstContent />
      <Service/>
      <NewsLetter/>
      <Footer
    </div>
  );
}

export default Folakits
