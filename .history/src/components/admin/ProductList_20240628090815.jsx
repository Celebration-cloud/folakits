// ProductList.js

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ProductList.module.css"; // Import your CSS module
import { IconButton } from "@mui/material";



const rows = [
  // Populate this array with your product data
  // Example:
  // { id: 1, product: 'Bass Speaker 1', description: 'Lorem ipsum...', quantity: 454, price: 299 },
  // Add more products as needed
];

export default function ProductList() {
  return (
    <div className={styles.productListContainer}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
