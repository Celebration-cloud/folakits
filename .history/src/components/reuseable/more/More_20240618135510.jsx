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
          <Link className="dropdown-item" to="/wishlist">
          <a  href="#">
            Wishlist
          </a>
          </Link>
          
        </li>
        <li>
          <Link className="dropdown-item" to='/log'>
            My Account
          </a>
          </Link>
          
        </li>
      </ul>
    </div>
  );
}

export default More
