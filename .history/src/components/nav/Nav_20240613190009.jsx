import Input from '../input/Input'
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'
function Nav() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-1">
          <img src={logo} alt='' />
        </div>
        <div className="col-9">
          <div>
            <Input />
          </div>
          <div>
            <i className="fa-solid fa-headset"></i>
            <span>+61 (0) 3 8376 6284</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
