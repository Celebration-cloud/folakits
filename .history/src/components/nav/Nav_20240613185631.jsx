import Input from '../input/Input'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-1">
          <img />
        </div>
        <div className="col-5">
          <div>
            <Input />
          </div>
          <div>
            <i className="fa-solid fa-headset"></i><span
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
