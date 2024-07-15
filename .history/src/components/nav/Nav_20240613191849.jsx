import CartBadge from '../cartBadge/CartBadge'
import Input from '../input/Input'
import styles from './Nav.module.css'
import logo from '/public/OIG3.jpeg'
function Nav() {
  return (
    <nav className="container">
        <div className="col">
          <img src={logo} alt="" width={100} height={100} />
        </div>
        <div className="col row align-items-start">
          <div className='col'>
            <Input />
          </div>
          <div className='col'>
            <i className="fa-solid fa-headset"></i>
            <span>+61 (0) 3 8376 6284</span>
          </div>
          <div className='col'>
            <CartBadge />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav
