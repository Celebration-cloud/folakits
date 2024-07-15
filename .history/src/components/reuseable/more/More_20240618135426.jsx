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
          <a className="dropdown-item"d href="#">
            Wishlist
          </a>
          </Link>
          
        </li>
        <li>
          <Link to='/log'>
          <a className="dropdown-item" href="#">
            My Account
          </a>
          </Link>
          
        </li>
      </ul>
    </div>
  );
}

export default More
