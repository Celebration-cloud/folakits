// ProductList.js

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ProductList.module.css"; // Import your CSS module
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductList() {
    function handleEdit(id){
        console.log(id)
    }
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "product", headerName: "Product", width: 130 },
      { field: "description", headerName: "Description", width: 200 },
      { field: "quantity", headerName: "Quantity", type: "number", width: 100 },
      { field: "price", headerName: "Price", type: "number", width: 100 },
      {
        field: "actions",
        headerName: "Edit",
        renderCell: (params) => (
          <>
            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(params.row.id)} // Replace with your edit function
            >
              <EditIcon />
              <DeleteIcon/>
            </IconButton>
          </>
        ),
      },
    ];

    const rows = [
      {
        id: 1,
        product: "Bass Speaker 1",
        description: "Lorem ipsum dolor sit amet...",
        quantity: "Available",
        price: 654,
      },
      {
        id: 2,
        product: "Bass Speaker 2",
        description: "Lorem ipsum dolor sit amet...",
        quantity: "Available",
        price: 134,
      },
      {
        id: 3,
        product: "Bass Speaker 4",
        description: "Lorem ipsum dolor sit amet...",
        quantity: "Unavailable",
        price: 454,
      },
      {
        id: 4,
        product: "Bass Speaker Venue 8 - 8 - Intel Atom",
        description: "Lorem ipsum dolor sit amet...",
        quantity: "Available",
        price: 324,
      },
      // Add more products as needed
    ];

  return (
    <div className={styles.productListContainer}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        autoPageSize
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
