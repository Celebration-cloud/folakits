import Input from '../input/Input'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-1">
          <img />
        </div>
        <div className="col-9">
          <div>
            <Input />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
