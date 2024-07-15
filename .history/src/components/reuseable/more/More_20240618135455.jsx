import { Link } from "react-router-dom";

function More() {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <strong>More</strong>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link className="dropdown-item" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
          <a className="dropdown-item" href="#">
            Wishlist
          </a>
          </Link>
          
        </li>
        <li>
          <LinkclassName="dropdown-item" to='/log'>
          <a  href="#">
            My Account
          </a>
          </LinkclassName=>
          
        </li>
      </ul>
    </div>
  );
}

export default More
