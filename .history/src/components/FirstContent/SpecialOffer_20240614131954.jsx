import Button from '../reuseable/button/Button';
import styles from './SpecialOffer.module.css'
function SpecialOffer() {
  return (
    <div className={styles.special}>
      <div>
        <h2>Special offer</h2>
        <p>Baby slippers</p>
      </div>
      <Button>Shop now</Button>
    </div>
  );
}

export default SpecialOffer
