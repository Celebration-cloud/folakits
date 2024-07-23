import { useNavigate } from 'react-router-dom';
import Categories from '../caterory/Categeries';
import Input from '../reuseable/input/Input'
import useWidthSize from '../reuseable/width/useWidthSize';
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'

function Nav() {
  const {width} = useWidthSize()
  const navigate = useNavigate()
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoSection} onClick={() => {navigate('/'), dispatch(receiveItem())}}>
          <img
            className={styles.logo}
            src={logo}
            alt=""
            width={50}
            height={50}
          />
          <span>
            <strong>
              <h3>FolaKits</h3>
            </strong>
          </span>
        </div>
        <div className={styles.searchCart}>
          {width > 880 && (
            <div className={styles.input}>
              <Input />
            </div>
          )}
          {width > 351 && (
            <div className={styles.support}>
              <i className="fa-solid fa-headset"></i>
              <span>+61 (0) 3 8376 6284</span>
            </div>
          )}
        </div>
      </nav>
      <Categories />
    </>
  );
}

export default Nav
