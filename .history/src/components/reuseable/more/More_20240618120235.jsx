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
          <a className="dropdown-item" href="#">
            Cart
          </a>
        </li>
        <li>
          <Link>
          </Link>
          <a className="dropdown-item" href="#">
            Wishlist
          </a>
        </li>
        <li>
          <L
          <a className="dropdown-item" href="#">
            Side Cart
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Checkout
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            My Account
          </a>
        </li>
      </ul>
    </div>
  );
}

export default More
