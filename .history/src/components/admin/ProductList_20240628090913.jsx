// ProductList.js

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ProductList.module.css"; // Import your CSS module
import { IconButton } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "product", headerName: "Product", width: 130 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 100 },
  { field: "price", headerName: "Price", type: "number", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => (
      <>
        <IconButton
          aria-label="edit"
          onClick={() => handleEdit(params.row.id)} // Replace with your edit function
        >
          <EditIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  // Populate this array with your product data
  // Example:
  // { id: 1, product: 'Bass Speaker 1', description: 'Lorem ipsum...', quantity: 454, price: 299 },
  // Add more products as needed
];

export default function ProductList() {
    function handleEdit(id){
        console.log()
    }
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "product", headerName: "Product", width: 130 },
      { field: "description", headerName: "Description", width: 200 },
      { field: "quantity", headerName: "Quantity", type: "number", width: 100 },
      { field: "price", headerName: "Price", type: "number", width: 100 },
      {
        field: "actions",
        headerName: "Actions",
        width: 120,
        renderCell: (params) => (
          <>
            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(params.row.id)} // Replace with your edit function
            >
              <EditIcon />
            </IconButton>
          </>
        ),
      },
    ];

    const rows = [
      // Populate this array with your product data
      // Example:
      // { id: 1, product: 'Bass Speaker 1', description: 'Lorem ipsum...', quantity: 454, price: 299 },
      // Add more products as needed
    ];
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
