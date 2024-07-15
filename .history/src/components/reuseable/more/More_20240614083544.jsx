import React from 'react'

function More() {
  return (
    <div cla="dropdown">
      <button
        cla="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul cla="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a cla="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a cla="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a cla="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default More
