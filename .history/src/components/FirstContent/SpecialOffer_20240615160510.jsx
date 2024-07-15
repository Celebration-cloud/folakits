import Button from '../reuseable/button/Button';
import styles from './SpecialOffer.module.css'
import img1 from "/public/red dress.png";
function SpecialOffer() {
  return (
    <div className={styles.special}>
      <div>
        <h2>Special offer</h2>
        <p>Baby slippers</p>
      </div>
      <img src={img1} alt=''/>
      <Button>Shop now</Button>
    </div>
  );
}

export default SpecialOffer
