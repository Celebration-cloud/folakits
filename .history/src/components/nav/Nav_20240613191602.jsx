import CartBadge from '../cartBadge/CartBadge'
import Input from '../input/Input'
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'
function Nav() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <img src={logo} alt='' width={50}  />
        </div>
        <div className="col">
          <div>
            <Input />
          </div>
          <div>
            <i className="fa-solid fa-headset"></i>
            <span>+61 (0) 3 8376 6284</span>
          </div>
          <div>
            <CartBadge/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
