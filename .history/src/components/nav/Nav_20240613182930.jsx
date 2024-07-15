import Input from '../input/Input'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div cl="container">
      <div cl="row align-items-start">
        <div cl="col">
          <img />
        </div>
        <div cl="col">
          <div>
            <Input />
          </div>
          <div></div>
          One of three columns
        </div>
      </div>
    </div>
  );
}

export default Nav
