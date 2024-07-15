import Input from '../input/Input'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <img />
        </div>
        <div className="col">
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
