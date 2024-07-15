import FeatureProduct from '../../components/features/FeatureProduct';
import FirstContent from '../../components/FirstContent/FirstContent';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter';
import Service from '../../components/offers/Service';
import Promotions from '../../components/promotions/Promotions';
import MobileNav from '../../components/reuseable/mobileNav/mobileNav';
import useWidthSize from '../../components/reuseable/width/useWidthSize';
import styles from './Folakits.module.css'
function Folakits() {
  const {width} = useWidthSize()
  return (
    <div className={styles.content}>
      <Nav />
      <FirstContent />
      <FeatureProduct/>
      <Service/>
      <NewsLetter/>
      <Footer/>
      {width < 880 && <MobileNav}
    </div>
  );
}

export default Folakits
